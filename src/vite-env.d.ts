/// <reference types="vite/client" />

interface Window {
  aistudio?: {
    hasSelectedApiKey: () => Promise<boolean>;
    requestApiKey: () => Promise<string>;
    openSelectKey: () => Promise<void>;
  };
}
