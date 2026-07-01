## 2024-05-18 - Prevent SVG-based XSS Attacks in File Uploads
**Vulnerability:** A generic `image/*` file upload filter via libraries like `react-dropzone` can allow users to upload SVG files. SVGs can contain embedded JavaScript, creating a Cross-Site Scripting (XSS) vulnerability.
**Learning:** The use of wildcards for image type validations might seem safe, but misses the fact that `image/svg+xml` triggers the wildcard and introduces scripting capabilities.
**Prevention:** Always explicitly allowlist safe MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`) instead of relying on the generic `image/*` wildcard.
