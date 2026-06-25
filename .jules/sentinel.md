## 2025-06-25 - [Missing Input Validation in React Forms & File Uploads]
**Vulnerability:** The application was vulnerable to DoS attacks via excessively long text inputs and potential XSS/malicious file uploads via unrestricted `image/*` file type acceptance in `react-dropzone`.
**Learning:** Frontend file uploads in React must explicitly allowlist safe MIME types (`image/jpeg`, `image/png`, `image/webp`) rather than relying on `image/*`, which can allow SVGs containing malicious scripts. Text inputs must always have a `maxLength` to prevent performance degradation from massive payloads.
**Prevention:** Always use explicit MIME type allowlists for file uploads and set `maxLength` attributes on text inputs or handle length validation before processing.
