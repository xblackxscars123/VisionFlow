## 2024-03-20 - SVG XSS & DoS via Unbounded Input
**Vulnerability:** `react-dropzone` was configured with `accept: { 'image/*': [] }` allowing SVG uploads which can execute JavaScript. The main prompt `<textarea>` had no `maxLength` restriction, posing a minor DoS/performance risk.
**Learning:** Generic wildcards like `image/*` in file upload contexts implicitly trust potentially dangerous formats like SVG. UI elements intended for brief text need explicit length limits.
**Prevention:** Always explicitly allowlist safe MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`) for image uploads instead of relying on wildcards. Always set `maxLength` on text inputs.
