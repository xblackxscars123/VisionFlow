## 2026-09-25 - Prevent SVG XSS and DoS via Input Constraints
**Vulnerability:** Generic wildcard MIME types (`image/*`) in React Dropzone allow SVG uploads which can carry malicious payloads, and missing `maxLength` constraints on text inputs risk performance degradation.
**Learning:** The application lacked strict input sanitization on both file boundaries and text interfaces.
**Prevention:** Always explicitly allowlist MIME types (`image/jpeg`, `image/png`, `image/webp`) instead of wildcards, and strictly limit text input length.
