## 2025-03-01 - File Upload XSS and Input DoS Prevention
**Vulnerability:** File upload allowed any image type (`image/*`), permitting potentially malicious SVG files (XSS vector). Text area allowed unlimited input, posing a DoS risk.
**Learning:** Always explicitly allowlist safe MIME types for file uploads instead of relying on generic wildcards. Always bound text inputs to prevent performance issues and resource exhaustion.
**Prevention:** Use specific types like `image/jpeg` in Dropzone configuration. Always add `maxLength` properties to text inputs.
