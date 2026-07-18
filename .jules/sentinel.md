## 2024-03-24 - [High] Prevent SVG XSS in Image Uploads
**Vulnerability:** Generic `image/*` MIME type wildcard in `react-dropzone` allowed malicious SVG files containing JavaScript (XSS) to be uploaded.
**Learning:** React components that render user-uploaded images or file pickers that rely on wildcards can inadvertently accept formats capable of executing code.
**Prevention:** Always use an explicit allowlist of safe MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`) instead of wildcards for image uploads.
