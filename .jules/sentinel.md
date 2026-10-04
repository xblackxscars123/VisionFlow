## 2024-10-04 - Prevent SVG XSS in File Uploads
**Vulnerability:** File upload component used `image/*` wildcard, allowing SVG files which can contain malicious JavaScript.
**Learning:** Generic MIME type wildcards in `react-dropzone` are unsafe as they permit executable image formats like SVG, leading to potential Cross-Site Scripting (XSS).
**Prevention:** Always explicitly allowlist safe image MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`) instead of relying on wildcards.
