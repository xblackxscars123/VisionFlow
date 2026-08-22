## 2024-10-27 - [Preventing SVG XSS in File Uploads]
**Vulnerability:** The application used `react-dropzone` with a generic wildcard (`image/*`) for accepted file types, which inadvertently allowed users to upload SVG files. SVGs can contain embedded JavaScript, leading to potential Cross-Site Scripting (XSS) attacks.
**Learning:** Generic file type wildcards in upload components are insecure by default. They fail to explicitly restrict potentially harmful sub-types (like `image/svg+xml`).
**Prevention:** Always explicitly allowlist known safe MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`) when implementing file upload functionality to prevent execution of malicious payloads.
