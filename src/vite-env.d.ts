/// <reference types="vite/client" />

interface AIStudio {
  hasSelectedApiKey(): Promise<boolean>;
  requestApiKey(): Promise<string>;
  openSelectKey(): Promise<void>;
}

declare global {
  interface Window {
    aistudio?: AIStudio;
  }
}

export {};
