## 2024-09-24 - Restrict File Upload MIME Types and Text Input Lengths
**Vulnerability:** The `react-dropzone` component allowed `image/*`, which permits uploading SVGs that could contain malicious XSS payloads. Additionally, the prompt textarea lacked a `maxLength`, exposing the app to performance degradation and DoS attacks.
**Learning:** Generic wildcards like `image/*` are dangerous because they include executable image formats like SVGs. Unbounded text inputs can freeze the browser or overwhelm the backend.
**Prevention:** Always explicitly allowlist safe MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`) for file uploads and enforce reasonable `maxLength` limits on all text inputs.
