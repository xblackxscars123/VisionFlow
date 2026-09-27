## 2025-03-02 - Secure File Uploads and Input Limits
**Vulnerability:** Unrestricted file types via `image/*` wildcard in react-dropzone and lack of text length limits on textareas.
**Learning:** `image/*` can allow malicious files like SVGs which execute XSS. Unrestricted text inputs risk DoS attacks or performance degradation from oversized payloads.
**Prevention:** Explicitly allowlist safe MIME types like `image/jpeg` and `image/png` instead of wildcards. Always enforce sensible `maxLength` limits on user inputs.
