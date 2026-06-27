## 2025-06-27 - [Input Validation and File Upload Security Enhancement]
**Vulnerability:** Potential SVG-based XSS attacks via unrestrained file uploads (generic `image/*` MIME type allowed) and lack of input length validation on text inputs.
**Learning:** Using generic wildcards in `react-dropzone` opens up avenues for users to upload unexpected or malicious file types (e.g. SVG containing executable scripts). Additionally, unbound text areas leave the app vulnerable to performance degradation or DoS if very large texts are submitted.
**Prevention:** Always explicitly define safe MIME types in `react-dropzone` `accept` prop (e.g., `'image/jpeg', 'image/png', 'image/webp'`) and apply `maxLength` attributes to all user-facing text inputs.
