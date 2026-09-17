## 2024-09-17 - Prevent XSS and DoS in user inputs
**Vulnerability:** The `react-dropzone` accepted generic `image/*` which allows SVG uploads potentially containing malicious scripts (XSS). The prompt textarea lacked a length limit, allowing massive inputs (DoS).
**Learning:** Generic wildcard MIME types in file uploads bypass intended restrictions, and unbounded text inputs can degrade performance or crash the app.
**Prevention:** Always explicitly allowlist safe MIME types (e.g., `image/jpeg`, `image/png`) and set `maxLength` on text inputs.
