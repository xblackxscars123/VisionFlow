## 2025-02-26 - SVG XSS in Image Uploads
**Vulnerability:** File upload accepting 'image/*' allowed potentially malicious SVG files to be uploaded.
**Learning:** Generic MIME types like 'image/*' can bypass intended file restrictions, opening vectors for XSS if SVGs containing scripts are rendered.
**Prevention:** Always explicitly allowlist safe MIME types (e.g., 'image/jpeg', 'image/png', 'image/webp') when using react-dropzone or native file inputs.
