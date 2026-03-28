import React, { useState, useRef, useEffect } from 'react';
import { 
  Upload, 
  Image as ImageIcon, 
  Zap, 
  Scissors, 
  Maximize, 
  Download, 
  Loader2, 
  CheckCircle2, 
  RefreshCw,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useDropzone } from 'react-dropzone';
import confetti from 'canvas-confetti';
import { generateHighResImage, removeBackground, upscaleImage, getCreativeSuggestions } from './services/gemini';

type Step = 'input' | 'processing' | 'result';

interface ProcessState {
  original: string | null;
  upscaled: string | null;
  noBg: string | null;
  final: string | null;
}

export default function App() {
  const [step, setStep] = useState<Step>('input');
  const [prompt, setPrompt] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentTask, setCurrentTask] = useState('');
  const [images, setImages] = useState<ProcessState>({
    original: null,
    upscaled: null,
    noBg: null,
    final: null,
  });
  const [error, setError] = useState<string | null>(null);
  const [hasKey, setHasKey] = useState<boolean | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isSuggesting, setIsSuggesting] = useState(false);

  useEffect(() => {
    const checkKey = async () => {
      if (window.aistudio?.hasSelectedApiKey) {
        const selected = await window.aistudio.hasSelectedApiKey();
        setHasKey(selected);
      } else {
        setHasKey(true); // Fallback for local dev
      }
    };
    checkKey();
    fetchSuggestions([]);
  }, []);

  const fetchSuggestions = async (currentHistory: string[]) => {
    setIsSuggesting(true);
    try {
      const newSuggestions = await getCreativeSuggestions(currentHistory);
      setSuggestions(newSuggestions);
    } catch (e) {
      console.error("Failed to fetch suggestions", e);
    } finally {
      setIsSuggesting(false);
    }
  };

  const handleSelectKey = async () => {
    if (window.aistudio?.openSelectKey) {
      await window.aistudio.openSelectKey();
      setHasKey(true);
    }
  };

  // We'll allow the user to try the "Free" mode first
  const [useFreeMode, setUseFreeMode] = useState(true);

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImages(prev => ({ ...prev, original: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  // @ts-ignore - Type mismatch in environment
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop, 
    accept: { 'image/*': [] },
    multiple: false 
  });

  const autoCrop = (base64: string): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(base64);
          return;
        }

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        let minX = canvas.width, minY = canvas.height, maxX = 0, maxY = 0;

        for (let y = 0; y < canvas.height; y++) {
          for (let x = 0; x < canvas.width; x++) {
            const alpha = data[(y * canvas.width + x) * 4 + 3];
            if (alpha > 0) {
              if (x < minX) minX = x;
              if (y < minY) minY = y;
              if (x > maxX) maxX = x;
              if (y > maxY) maxY = y;
            }
          }
        }

        if (maxX < minX || maxY < minY) {
          resolve(base64);
          return;
        }

        const width = maxX - minX + 1;
        const height = maxY - minY + 1;
        const cropCanvas = document.createElement('canvas');
        cropCanvas.width = width;
        cropCanvas.height = height;
        const cropCtx = cropCanvas.getContext('2d');
        if (!cropCtx) {
          resolve(base64);
          return;
        }

        cropCtx.drawImage(canvas, minX, minY, width, height, 0, 0, width, height);
        resolve(cropCanvas.toDataURL('image/png'));
      };
      img.src = base64;
    });
  };

  const runPipeline = async () => {
    try {
      setIsProcessing(true);
      setError(null);
      setStep('processing');

      let currentImage = images.original;

      // 1. Find/Generate Image if no original provided
      if (!currentImage) {
        setCurrentTask('Finding high quality image...');
        currentImage = await generateHighResImage(prompt || "A high quality, professional product shot of a futuristic gadget");
        setImages(prev => ({ ...prev, original: currentImage }));
      }

      // 2. Upscale
      setCurrentTask('Upscaling with AI (Waifu2x alternative)...');
      const upscaled = await upscaleImage(currentImage!);
      setImages(prev => ({ ...prev, upscaled }));
      currentImage = upscaled;

      // 3. Remove Background
      setCurrentTask('Removing background automatically...');
      const noBg = await removeBackground(currentImage);
      setImages(prev => ({ ...prev, noBg }));
      currentImage = noBg;

      // 4. Final Optimization & Auto-Crop
      setCurrentTask('Optimizing & Cropping PNG...');
      const cropped = await autoCrop(currentImage);
      setImages(prev => ({ ...prev, final: cropped }));

      if (prompt) {
        const newHistory = [prompt, ...history].slice(0, 5);
        setHistory(newHistory);
        fetchSuggestions(newHistory);
      }

      setStep('result');
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err: any) {
      console.error(err);
      const errorMessage = err.message || "An error occurred during processing";
      
      // If we get a 403 or "not found" error, it might be related to the API key
      if (errorMessage.includes("403") || errorMessage.includes("not found")) {
        setHasKey(false);
        setUseFreeMode(false);
        setError("API key permission denied. You can switch to the Free Model or connect a paid key.");
      } else {
        setError(errorMessage);
      }
      
      setStep('input');
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadImage = () => {
    if (!images.final) return;
    const link = document.createElement('a');
    link.href = images.final;
    link.download = 'visionflow-optimized.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-orange-500/30">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-xs font-medium uppercase tracking-widest text-white/60">AI Image Pipeline</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent"
          >
            VisionFlow
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-lg max-w-xl mx-auto"
          >
            Automate your high-resolution asset creation. Generate, upscale, remove backgrounds, and optimize in one click.
          </motion.p>
        </header>

        <AnimatePresence mode="wait">
          {hasKey === false && !useFreeMode ? (
            <motion.div
              key="key-selection"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md mx-auto p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-orange-400" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Choose Your Model</h2>
              <p className="text-white/40 mb-8 text-sm">
                High-resolution 4K models require a paid API key. You can also continue with the standard free model.
              </p>
              <div className="space-y-4">
                <button
                  onClick={handleSelectKey}
                  className="w-full py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 font-bold text-black transition-all flex items-center justify-center gap-2"
                >
                  Connect Paid Key (4K)
                </button>
                <button
                  onClick={() => {
                    setUseFreeMode(true);
                    setHasKey(true);
                  }}
                  className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 font-bold text-white transition-all flex items-center justify-center gap-2"
                >
                  Use Free Model (Standard)
                </button>
              </div>
              <p className="mt-6 text-[10px] text-white/20 uppercase tracking-widest">
                <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 underline">
                  Billing Docs
                </a>
              </p>
            </motion.div>
          ) : step === 'input' && (
            <motion.div
              key="input"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Generation Input */}
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-orange-400" />
                  Generate from Prompt
                </h2>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe the image you want to find and process..."
                  className="w-full h-32 bg-black/40 border border-white/10 rounded-2xl p-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all resize-none mb-6"
                />
                <button
                  onClick={runPipeline}
                  disabled={!prompt && !images.original}
                  className="w-full py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed font-bold text-black transition-all flex items-center justify-center gap-2 group"
                >
                  Start Automation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Creative Suggestions */}
                <div className="mt-8">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xs font-medium uppercase tracking-widest text-white/40 flex items-center gap-2">
                      <Sparkles className="w-3 h-3" />
                      Creative Inspiration
                    </h3>
                    {isSuggesting && <Loader2 className="w-3 h-3 animate-spin text-white/20" />}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((suggestion, idx) => (
                      <button
                        key={idx}
                        onClick={() => setPrompt(suggestion)}
                        className="text-[10px] px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange-500/30 transition-all text-white/60 hover:text-white"
                      >
                        {suggestion}
                      </button>
                    ))}
                    {suggestions.length === 0 && !isSuggesting && (
                      <p className="text-[10px] text-white/20 italic">No suggestions yet. Try generating something!</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Upload Input */}
              <div 
                {...getRootProps()} 
                className={`p-8 rounded-3xl border-2 border-dashed transition-all cursor-pointer flex flex-col items-center justify-center text-center ${
                  isDragActive ? 'border-orange-500 bg-orange-500/5' : 'border-white/10 bg-white/5 hover:bg-white/10'
                }`}
              >
                <input {...getInputProps()} />
                {images.original ? (
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                    <img src={images.original} alt="Original" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <p className="text-sm font-medium">Click to replace</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-4">
                      <Upload className="w-8 h-8 text-white/40" />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Upload Image</h2>
                    <p className="text-white/40 text-sm">Drag and drop or click to select a file to process</p>
                  </>
                )}
              </div>
            </motion.div>
          )}

          {step === 'processing' && (
            <motion.div
              key="processing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-20"
            >
              <div className="relative mb-12">
                <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full animate-pulse" />
                <Loader2 className="w-24 h-24 text-orange-500 animate-spin relative z-10" />
              </div>
              <h2 className="text-3xl font-bold mb-4 tracking-tight">{currentTask}</h2>
              <div className="flex gap-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      delay: i * 0.2 
                    }}
                    className="w-2 h-2 rounded-full bg-orange-500"
                  />
                ))}
              </div>
            </motion.div>
          )}

          {step === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-12"
            >
              {/* Result Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Final Result */}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium uppercase tracking-widest text-white/40 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Final Optimized Asset
                  </h3>
                  <div className="relative aspect-square rounded-3xl bg-white/5 border border-white/10 overflow-hidden group">
                    <img 
                      src={images.final!} 
                      alt="Final" 
                      className="w-full h-full object-contain p-8"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <button 
                        onClick={downloadImage}
                        className="p-4 rounded-full bg-white text-black hover:scale-110 transition-transform"
                      >
                        <Download className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Pipeline Steps */}
                <div className="space-y-6">
                  <h3 className="text-sm font-medium uppercase tracking-widest text-white/40">Pipeline History</h3>
                  
                  <div className="space-y-4">
                    <PipelineStep 
                      icon={<ImageIcon className="w-4 h-4" />}
                      label="Source Image"
                      status="Original"
                      image={images.original!}
                    />
                    <PipelineStep 
                      icon={<Maximize className="w-4 h-4" />}
                      label="AI Upscale"
                      status="4K Enhanced"
                      image={images.upscaled!}
                    />
                    <PipelineStep 
                      icon={<Scissors className="w-4 h-4" />}
                      label="Background Removal"
                      status="Object Isolated"
                      image={images.noBg!}
                    />
                  </div>

                  <div className="pt-6 flex gap-4">
                    <button
                      onClick={downloadImage}
                      className="flex-1 py-4 rounded-2xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
                    >
                      <Download className="w-5 h-5" />
                      Download PNG
                    </button>
                    <button
                      onClick={() => setStep('input')}
                      className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                    >
                      <RefreshCw className="w-5 h-5" />
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {error && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-center text-sm"
          >
            {error}
          </motion.div>
        )}
      </main>

      {/* Footer Info */}
      <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-white/5 text-center">
        <p className="text-white/20 text-xs uppercase tracking-[0.2em]">
          Powered by Gemini 3.1 Flash & Vision Models
        </p>
      </footer>
    </div>
  );
}

function PipelineStep({ icon, label, status, image }: { icon: React.ReactNode, label: string, status: string, image: string }) {
  return (
    <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/10">
      <div className="w-12 h-12 rounded-xl overflow-hidden bg-black/40 flex-shrink-0">
        <img src={image} alt={label} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold truncate">{label}</p>
        <p className="text-xs text-white/40">{status}</p>
      </div>
      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40">
        {icon}
      </div>
    </div>
  );
}
