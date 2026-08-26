export {};

declare global {
  interface Window {
    aistudio?: {
      hasSelectedApiKey: () => Promise<boolean>;
      requestApiKey: () => Promise<string | undefined>;
      openSelectKey: () => Promise<void>;
    };
  }
}
