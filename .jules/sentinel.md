## 2024-03-24 - [Prevent SVG XSS and DoS in React]
**Vulnerability:** Generic `image/*` wildcard in `react-dropzone` allows SVG uploads which can contain malicious scripts, leading to XSS if rendered unsafely. Uncapped text areas allow massive inputs which can lead to application DoS or excessive API consumption.
**Learning:** Always explicitly allowlist safe MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`) instead of relying on wildcards. Text inputs must always enforce a `maxLength`.
**Prevention:** Use explicit allowlists in file uploaders and set reasonable `maxLength` attributes on all text inputs.
