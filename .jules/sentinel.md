## 2024-05-24 - SVG-based XSS and DoS risks

**Vulnerability:**
1. The file upload using `react-dropzone` allows `image/*` which inadvertently permits `.svg` files containing malicious scripts (XSS).
2. The `<textarea>` for prompts in `src/App.tsx` lacks a `maxLength` restriction, opening up the app to Denial of Service (DoS) attacks by pasting excessively large amounts of text.

**Learning:**
Generic wildcards like `image/*` are dangerous when using libraries for file uploads as they include SVGs which can execute Javascript. Similarly, unconstrained text inputs can cause performance issues or backend crashes.

**Prevention:**
1. Always explicitly allowlist safe MIME types (`image/jpeg`, `image/png`, `image/webp`) instead of wildcards for image uploads.
2. Always apply `maxLength` attributes to text inputs based on the reasonable expected size of the input.