## 2024-05-24 - File Upload & Input Length Vulnerabilities
**Vulnerability:** Generic wildcard file upload (`image/*`) in dropzone and missing input length limits on textarea.
**Learning:** Using generic image type allowlisting can allow malicious SVG files containing XSS payloads to be uploaded. Unbounded textareas can lead to performance degradation or DoS if users input excessively large text.
**Prevention:** Explicitly allowlist safe MIME types (`image/jpeg`, `image/png`, `image/webp`) instead of wildcards. Always add `maxLength` properties to text inputs.
