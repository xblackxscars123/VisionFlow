## 2024-05-23 - SVG XSS in Image Uploads
**Vulnerability:** File upload configured to accept `image/*`, which includes `image/svg+xml`. SVGs can contain embedded JavaScript that executes when viewed directly, leading to Cross-Site Scripting (XSS).
**Learning:** Generic MIME type wildcards like `image/*` are often too permissive and allow unexpected or dangerous file types.
**Prevention:** Always explicitly allowlist safe MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`) instead of relying on wildcards.

## 2024-05-23 - Missing Input Length Limits
**Vulnerability:** Textarea for prompt input lacked a `maxLength` attribute, potentially allowing users to submit extremely large strings.
**Learning:** Unbounded text inputs can lead to performance degradation or Application-Level Denial of Service (DoS) when processing large payloads.
**Prevention:** Always ensure text inputs have reasonable `maxLength` limits defined both on the client and server side.
