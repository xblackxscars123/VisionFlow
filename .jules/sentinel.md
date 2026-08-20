## 2026-08-20 - [XSS via SVG File Uploads]
**Vulnerability:** react-dropzone was configured to accept 'image/*', which allows SVG files. SVG files can contain embedded JavaScript that executes when rendered in the browser, leading to XSS.
**Learning:** Generic MIME wildcards like 'image/*' in file upload libraries bypass specific format restrictions and expose applications to XSS via SVGs.
**Prevention:** Always explicitly allowlist safe MIME types (e.g., 'image/jpeg', 'image/png', 'image/webp') instead of using wildcards.
