## 2024-05-20 - [File Upload and Input Length Limits]
**Vulnerability:** File upload using `react-dropzone` accepted all `image/*` types, which allows uploading malicious SVGs (XSS risk). The prompt textarea was missing a `maxLength` limit, creating a DoS risk.
**Learning:** Always explicitly allowlist safe MIME types (e.g., jpeg, png, webp) for user uploads and enforce bounds on all text inputs.
**Prevention:** Ensure `react-dropzone` `accept` prop specifies exact MIME types and apply `maxLength` to all text inputs.