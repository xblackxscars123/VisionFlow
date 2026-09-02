## 2025-02-15 - Unsafe Image Uploads and Missing Input Limits
**Vulnerability:** File upload allowed generic `image/*` which includes dangerous types like `image/svg+xml` (XSS risk). Textarea lacked length limits (DoS risk).
**Learning:** Generic wildcards in file inputs and missing maxLength in text inputs can expose the application to XSS and DoS attacks.
**Prevention:** Explicitly allowlist safe MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`) and always add `maxLength` limits to text inputs.
