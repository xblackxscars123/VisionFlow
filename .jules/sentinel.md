## 2024-03-24 - File Upload and Input Length Constraints
**Vulnerability:** Weak MIME type validation (`image/*`) in dropzone and unrestricted textarea length.
**Learning:** Using generic wildcards for image uploads can allow malicious SVG files (which can contain executable scripts) leading to XSS. Unrestricted inputs can cause DoS.
**Prevention:** Always explicitly allowlist safe MIME types (`image/jpeg`, `image/png`, `image/webp`) and add `maxLength` properties to text inputs.
