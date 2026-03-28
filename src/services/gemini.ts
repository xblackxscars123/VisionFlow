import { GoogleGenAI } from "@google/genai";

function getAI() {
  // Use the user-selected API_KEY if available, otherwise fallback to GEMINI_API_KEY
  const apiKey = (process.env as any).API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("No API key found. Please select an API key in the settings.");
  }
  return new GoogleGenAI({ apiKey });
}

export async function generateHighResImage(prompt: string) {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: `High resolution, high quality, professional photography, sharp focus, detailed: ${prompt}`,
        },
      ],
    },
    // imageSize and 2K/4K are not supported in gemini-2.5-flash-image
    config: {
      imageConfig: {
        aspectRatio: "1:1",
      },
    },
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  throw new Error("No image generated");
}

export async function removeBackground(base64Image: string) {
  const ai = getAI();
  // Extract base64 data and mime type
  const match = base64Image.match(/^data:(image\/\w+);base64,(.+)$/);
  if (!match) throw new Error("Invalid image format");
  
  const mimeType = match[1];
  const data = match[2];

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          inlineData: {
            data: data,
            mimeType: mimeType,
          },
        },
        {
          text: "Remove the background of this image and return only the main object on a transparent or solid white background. If possible, return the image with the background removed.",
        },
      ],
    },
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  throw new Error("Background removal failed");
}

export async function upscaleImage(base64Image: string) {
  const ai = getAI();
  const match = base64Image.match(/^data:(image\/\w+);base64,(.+)$/);
  if (!match) throw new Error("Invalid image format");
  
  const mimeType = match[1];
  const data = match[2];

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          inlineData: {
            data: data,
            mimeType: mimeType,
          },
        },
        {
          text: "Enhance this image to higher resolution, improving details and removing noise while maintaining the original content perfectly.",
        },
      ],
    },
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  throw new Error("Upscaling failed");
}

export async function getCreativeSuggestions(history: string[]) {
  const ai = getAI();
  const historyContext = history.length > 0 
    ? `The user has previously generated/processed: ${history.join(", ")}.`
    : "The user is starting fresh.";

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: `${historyContext} Based on this, suggest 3 creative, high-quality image prompts that would be great for background removal and upscaling. Keep them short and descriptive. Return as a JSON array of strings.`,
        },
      ],
    },
    config: {
      responseMimeType: "application/json",
    }
  });

  try {
    const suggestions = JSON.parse(response.text || "[]");
    return Array.isArray(suggestions) ? suggestions : [];
  } catch (e) {
    console.error("Failed to parse suggestions", e);
    return [];
  }
}
