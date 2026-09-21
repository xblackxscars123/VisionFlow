## 2025-03-05 - Prevent SVG XSS and Input DoS
**Vulnerability:** File upload allowed all image types (`image/*`), potentially permitting malicious SVGs with embedded scripts. Textarea lacked length limits, risking application performance degradation/DoS.
**Learning:** Generic MIME wildcards in `react-dropzone` bypass security by allowing unsafe formats like SVGs. Unbounded text inputs can freeze the client when large amounts of text are pasted.
**Prevention:** Always explicitly allowlist safe image MIME types (`image/jpeg`, `image/png`, `image/webp`) and strictly enforce `maxLength` attributes on user text inputs.
