export {};

declare global {
  interface Window {
    aistudio?: {
      hasSelectedApiKey: () => Promise<boolean>;
      requestApiKey: () => Promise<string>;
      openSelectKey: () => Promise<void>;
    };
  }
}
