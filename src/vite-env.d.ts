/// <reference types="vite/client" />
export {};

declare global {
  interface Window {
    aistudio?: {
      hasSelectedApiKey: () => Promise<boolean>;
      requestApiKey: () => Promise<void>;
      openSelectKey: () => Promise<void>;
    };
  }
}
