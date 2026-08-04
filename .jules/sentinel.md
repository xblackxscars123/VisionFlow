## 2024-10-27 - [High] Prevent SVG XSS and Input DoS
**Vulnerability:** File upload allowed any `image/*` MIME type, risking malicious SVG execution. Input textarea had no `maxLength` bound, leading to potential DoS or performance degradation on excessive input.
**Learning:** Generic wildcard MIME types like `image/*` implicitly allow formats like SVG which can run scripts in the browser if mishandled. Text inputs without length constraints can crash the browser or cause unexpected issues when passed to external services.
**Prevention:** Always explicitly allowlist secure image MIME types (e.g. `image/jpeg`, `image/png`, `image/webp`). Always set a `maxLength` property on input fields and textareas.
