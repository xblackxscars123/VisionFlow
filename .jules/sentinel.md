## 2023-10-26 - [File Upload and Textarea Vulnerabilities]
**Vulnerability:** The `react-dropzone` accepted generic `image/*` MIME types, which allows for potentially malicious SVG uploads (`image/svg+xml`) leading to XSS. The prompt `<textarea>` had no `maxLength`, posing a risk of DoS attacks via excessively large inputs.
**Learning:** Generic MIME type allowlisting is overly permissive, and unrestricted text inputs are unsafe.
**Prevention:** Always explicitly allowlist safe MIME types (e.g., `image/jpeg`, `image/png`) when accepting file uploads, and enforce `maxLength` restrictions on text inputs.
