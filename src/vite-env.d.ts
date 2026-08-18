/// <reference types="vite/client" />
export {};

declare global {
  interface Window {
    aistudio?: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
      requestApiKey?: () => Promise<void>;
    };
  }
}
