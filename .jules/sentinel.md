## 2025-03-05 - SVG XSS and DoS in React Dropzone
**Vulnerability:** The application used a wildcard `image/*` MIME type for file uploads and an unbounded textarea for prompts. This could allow attackers to upload malicious SVG files containing embedded JavaScript (XSS) or paste extremely large strings into the textarea, leading to performance degradation and DoS.
**Learning:** Generic wildcards like `image/*` in `react-dropzone` implicitly allow `image/svg+xml`, which is an execution vector. Unbounded text inputs in React can cause severe re-rendering performance issues.
**Prevention:** Always explicitly allowlist safe image formats (e.g., `image/jpeg`, `image/png`, `image/webp`) and enforce strict `maxLength` attributes on all text inputs.
