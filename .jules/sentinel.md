## 2026-08-24 - Insecure Image Uploads and Unbounded Inputs
**Vulnerability:** The application used a generic `image/*` wildcard in `react-dropzone`, allowing SVG files which can harbor XSS attacks. Additionally, the prompt textarea had no `maxLength`, posing a DoS/performance risk.
**Learning:** Generic MIME types like `image/*` include formats like `image/svg+xml` which execute javascript when viewed. Unbounded textareas can cause browser performance issues or backend processing exhaustion.
**Prevention:** Always explicitly allowlist safe MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`) instead of wildcards. Always enforce sensible `maxLength` attributes on user inputs.
