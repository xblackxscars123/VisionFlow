/// <reference types="vite/client" />

export {};

declare global {
  interface Window {
    aistudio?: {
      hasSelectedApiKey: () => Promise<boolean>;
      requestApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}
