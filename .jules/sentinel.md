## 2024-05-18 - Prevent SVG XSS and DoS
**Vulnerability:** Generic `image/*` MIME type allowed SVG uploads leading to potential XSS, and `textarea` lacked length limits leading to potential DoS/performance degradation.
**Learning:** `react-dropzone` should explicitly allowlist safe image types instead of wildcards. Text inputs should always have bounded length.
**Prevention:** Always explicitly define `accept: { 'image/jpeg': [], 'image/png': [], 'image/webp': [] }` for image uploads. Always set `maxLength` on text inputs.
