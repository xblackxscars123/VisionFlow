/// <reference types="vite/client" />

interface Window {
  aistudio?: {
    hasSelectedApiKey: () => Promise<boolean>;
    requestApiKey: () => Promise<boolean>;
    openSelectKey: () => Promise<boolean>;
  };
}