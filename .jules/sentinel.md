## 2024-05-30 - Prevent SVG XSS in File Uploads
**Vulnerability:** File upload functionality using `react-dropzone` relied on generic `image/*` MIME type wildcard, allowing potentially malicious SVG files containing executable scripts (XSS).
**Learning:** Generic wildcards like `image/*` in file upload acceptance criteria are insecure as they include vector formats like SVG which can execute embedded JavaScript.
**Prevention:** Always explicitly allowlist safe raster image formats (e.g., `image/jpeg`, `image/png`, `image/webp`) and avoid wildcards.