## 2024-05-24 - File Upload XSS and Input DoS
**Vulnerability:** The application used a generic `image/*` wildcard for file uploads and lacked a `maxLength` on a text input.
**Learning:** Generic wildcards like `image/*` allow uploading SVG files which can execute malicious scripts (XSS). Unbounded text inputs can cause performance degradation and DoS vulnerabilities.
**Prevention:** Always explicitly allowlist safe MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`) and enforce `maxLength` on user inputs.
