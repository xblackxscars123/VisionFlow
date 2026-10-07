## 2026-10-07 - Insecure File Upload via Generic Image MIME Type
**Vulnerability:** Use of `image/*` wildcard in `react-dropzone` configuration.
**Learning:** Using generic wildcards permits executable formats like SVG, leading to potential Cross-Site Scripting (XSS).
**Prevention:** Explicitly allowlist safe MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`).
