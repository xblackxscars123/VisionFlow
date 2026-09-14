## 2024-10-25 - Prevent SVG XSS and DoS
**Vulnerability:** Generic `image/*` allowlist in file uploads and missing input length limits on textareas.
**Learning:** Generic wildcards like `image/*` allow potentially dangerous formats like SVGs which can execute scripts, while missing length limits can cause performance issues or DoS.
**Prevention:** Always explicitly allowlist safe MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`) and enforce `maxLength` on user text inputs.
