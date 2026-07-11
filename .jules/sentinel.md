## 2024-05-24 - Restrict image upload types and bound text inputs
**Vulnerability:** The application used `image/*` for file uploads, which allows SVG files that can contain XSS payloads. Additionally, the text input for prompts was unbounded, which can cause DoS or performance degradation.
**Learning:** Generic file type wildcards in `useDropzone` (like `image/*`) do not inherently restrict dangerous file types like SVG. Unbounded textareas can accept arbitrarily long text strings.
**Prevention:** Explicitly allowlist safe MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`) instead of relying on generic wildcards. Always ensure text inputs have `maxLength` limits.
