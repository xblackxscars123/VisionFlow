## 2024-05-24 - File Upload and Text Input Vulnerabilities
**Vulnerability:** SVG-based XSS via `image/*` file uploads and DoS via unbounded `textarea`.
**Learning:** Using `image/*` allows uploading SVG files, which can contain embedded scripts and lead to XSS attacks when served. Unbounded text inputs can cause performance issues or DoS vulnerabilities if large payloads are submitted.
**Prevention:** Always explicitly allowlist safe MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`) instead of relying on generic wildcards. Additionally, always define `maxLength` on text inputs.