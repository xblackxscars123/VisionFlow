interface AIStudio {
  hasSelectedApiKey?: () => Promise<boolean>;
  openSelectKey?: () => Promise<void>;
  requestApiKey?: () => Promise<string>;
}

declare global {
  interface Window {
    aistudio?: AIStudio;
  }
}

export {};
