## 2024-05-15 - Unbounded Text Inputs and Generic Image Mimetypes
**Vulnerability:** Found generic `image/*` allowlist in file upload (leading to potential SVG-based XSS attacks) and an unbounded textarea input (DoS risk).
**Learning:** React-dropzone needs explicit safe mimetypes for image uploads to avoid accepting executable files like SVGs. Textareas require `maxLength` constraints to prevent large payload submissions.
**Prevention:** Always use explicit lists (e.g. `image/jpeg`, `image/png`, `image/webp`) instead of wildcards like `image/*`. Add `maxLength` constraints to user-facing input fields.
