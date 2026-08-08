## 2024-05-24 - Prevent SVG XSS and Input DoS
**Vulnerability:** Generic `image/*` accept wildcard in file upload allows SVG files which can contain embedded scripts leading to Cross-Site Scripting (XSS). Additionally, the text area for the prompt lacked a `maxLength` limitation, which could be exploited for denial-of-service (DoS) or performance degradation.
**Learning:** React dropzone wildcards don't filter out dangerous image formats like SVG. Also, all user inputs must be bounded.
**Prevention:** Always explicitly allowlist safe MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`) and enforce `maxLength` on text inputs.
