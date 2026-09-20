
## 2024-10-31 - Prevent SVG XSS and DoS via input validation
**Vulnerability:** Generic wildcard `image/*` in `react-dropzone` allowed SVG uploads which could contain XSS payloads. Textarea input lacked length limits, posing a DoS risk.
**Learning:** Always use explicit safe MIME type allowlists for image uploads, and enforce `maxLength` on user input fields to avoid performance degradation and DoS.
**Prevention:** Hardcode allowed MIME types (`image/jpeg`, `image/png`, `image/webp`) instead of wildcards, and add `maxLength` attributes to all text inputs.
