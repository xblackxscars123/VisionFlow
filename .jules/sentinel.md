## 2024-05-15 - SVG-Based XSS Risk in File Uploads
**Vulnerability:** The `react-dropzone` implementation used `accept: { 'image/*': [] }`, which implicitly permits `image/svg+xml`. SVG files can contain embedded `<script>` tags that execute JavaScript when opened in a browser, leading to Stored XSS vulnerabilities.
**Learning:** Generic MIME type wildcards like `image/*` should not be used in React file upload configurations unless explicitly required, and even then, rigorous server-side validation is necessary.
**Prevention:** Always explicitly allowlist safe, raster image formats (e.g., `'image/jpeg'`, `'image/png'`, `'image/webp'`) when only standard image rendering is required.

## 2024-05-15 - Client-Side DoS via Unbounded Textarea
**Vulnerability:** The `<textarea>` for the prompt input lacked a `maxLength` constraint.
**Learning:** Missing input constraints can allow users to paste massive strings (megabytes in size), potentially causing severe UI lagging, memory exhaustion (client-side DoS), or unexpectedly large payloads sent to backend APIs.
**Prevention:** Always enforce a reasonable `maxLength` attribute on all HTML input elements, especially `<textarea>`, as a defense-in-depth measure.
