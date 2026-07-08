## 2026-07-08 - [Unrestricted File Upload & Missing Input Length Limits]
**Vulnerability:** The application previously used `accept: { 'image/*': [] }` in `react-dropzone`, which allows dangerous SVG files that can execute XSS payloads. Additionally, the prompt textarea lacked a `maxLength` attribute, making it susceptible to DoS attacks via excessively large inputs.
**Learning:** Generic wildcard MIME types (`image/*`) in file uploads and unbounded text inputs are common oversight patterns that can lead to significant vulnerabilities.
**Prevention:** Always explicitly allowlist safe MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`) and strictly limit text input length using the `maxLength` attribute.
