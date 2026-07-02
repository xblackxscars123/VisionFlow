## 2024-07-02 - [Input Validation and SVG XSS]
**Vulnerability:** File upload allowed any `image/*` MIME type, exposing an XSS vector through malicious SVGs. Textarea lacked length limits, enabling potential performance/DoS issues.
**Learning:** Generic MIME wildcards in file dropzones can expose applications to injection attacks via less secure sub-types like SVG. Length limits are required for all unconstrained text inputs.
**Prevention:** Always explicitly allowlist secure MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`). Implement `maxLength` limits on all text inputs by default.
