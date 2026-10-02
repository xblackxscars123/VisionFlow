## 2025-02-26 - SVG XSS and DoS via Unrestricted Inputs
**Vulnerability:** The application accepted `image/*` wildcards in `react-dropzone` (allowing SVG uploads leading to XSS) and lacked `maxLength` constraints on textareas (allowing potential DoS).
**Learning:** Generic MIME types and unbounded text inputs present significant security risks, particularly in front-end applications where they can be exploited for payload execution or resource exhaustion.
**Prevention:** Always explicitly allowlist safe MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`) and enforce strict `maxLength` boundaries on all user text inputs.
