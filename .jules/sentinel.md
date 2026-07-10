## 2024-07-10 - Input Validation Gaps
**Vulnerability:** File upload allowed arbitrary `image/*` which could include malicious SVGs (XSS). Textarea allowed unlimited input length (DoS).
**Learning:** Always use explicit allowlists for file types and set `maxLength` on text inputs in React applications.
**Prevention:** Explicitly specify safe MIME types (`image/jpeg`, `image/png`, `image/webp`) in `react-dropzone` and set reasonable `maxLength` limits on all text inputs.
