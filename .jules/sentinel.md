## 2025-03-05 - Prevent SVG XSS in File Uploads
**Vulnerability:** The application used a generic `image/*` wildcard in `react-dropzone` for file uploads, which allows uploading SVG files that could contain malicious JavaScript (XSS risk).
**Learning:** Generic wildcards like `image/*` do not securely restrict uploads to safe raster image formats. SVG files are technically images but can execute scripts in the browser context.
**Prevention:** Always use explicit, safe MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`, `image/gif`) in file upload accept configurations instead of generic wildcards.
