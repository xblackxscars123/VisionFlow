## 2024-05-24 - SVG XSS and Input DoS Prevention
**Vulnerability:** Unrestricted file uploads using `image/*` could allow SVG-based XSS attacks. Text inputs lacked `maxLength` restrictions, posing a DoS risk.
**Learning:** Relying on generic wildcards for file uploads in `react-dropzone` is insecure. Text inputs must always be bounded.
**Prevention:** Explicitly allowlist safe MIME types (`image/jpeg`, `image/png`, `image/webp`) and strictly define `maxLength` on all user inputs.
