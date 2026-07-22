## 2024-07-22 - SVG XSS and Input DoS Vulnerabilities
**Vulnerability:** The application used `accept: { 'image/*': [] }` for file uploads, which implicitly allowed `.svg` files containing malicious scripts, creating an XSS risk. Furthermore, text inputs lacked a `maxLength` property, exposing the application to performance degradation or DoS if excessively large inputs were processed.
**Learning:** React dropzone configurations with generic wildcards (`image/*`) are insufficient for preventing malicious file uploads since SVG is technically an image format but executes scripts. Inputs should also always be length-bounded.
**Prevention:** Always explicitly allowlist safe MIME types (e.g., `'image/jpeg'`, `'image/png'`, `'image/webp'`) and add `maxLength` properties to user text inputs.
