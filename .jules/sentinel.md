## 2025-02-28 - Prevent XSS in File Uploads
**Vulnerability:** react-dropzone configured with wildcard 'image/*' allowed executable image formats like SVG.
**Learning:** Wildcard MIME types in file uploads bypass security checks, allowing potential Cross-Site Scripting (XSS) if SVG files are rendered.
**Prevention:** Always explicitly allowlist safe MIME types (e.g., 'image/jpeg', 'image/png', 'image/webp') instead of using generic wildcards.
