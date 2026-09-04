## 2024-05-18 - Restrict Image Upload MIME Types
**Vulnerability:** XSS vulnerability through generic `image/*` upload wildcard in `react-dropzone`.
**Learning:** Using `image/*` allows uploading `image/svg+xml` files, which can execute embedded JavaScript when rendered.
**Prevention:** Always explicitly allowlist safe image MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`) instead of relying on generic wildcards.
