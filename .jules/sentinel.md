## 2024-06-26 - SVG-based XSS and DoS Prevention in Input Fields
**Vulnerability:** The application used wildcard `image/*` types in `react-dropzone` which could allow arbitrary SVG uploads leading to XSS vulnerabilities. Additionally, textarea inputs lacked maximum length limitations, leading to potential DoS due to performance degradation.
**Learning:** Generic accept configurations in file uploads are risky as formats like SVG can contain embedded JavaScript. Unbounded text inputs also introduce potential client-side hangs or DoS.
**Prevention:** Explicitly allowlist safe MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`) and always define practical bounds (like `maxLength={500}`) on text inputs.
