## 2025-03-08 - XSS vulnerability in file upload
**Vulnerability:** Generic `image/*` MIME type allowed SVG uploads, leading to potential Cross-Site Scripting (XSS).
**Learning:** Relying on wildcard MIME types in `react-dropzone` is unsafe as it encompasses dangerous vector graphics formats capable of executing JavaScript.
**Prevention:** Always explicitly allowlist safe image formats (e.g., `image/jpeg`, `image/png`, `image/webp`).
