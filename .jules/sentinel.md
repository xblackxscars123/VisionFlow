## 2025-02-20 - [Fix XSS and DoS vulnerabilities in user inputs]
**Vulnerability:**
1. SVG-based Cross-Site Scripting (XSS) due to wildcard `image/*` MIME type acceptance in `react-dropzone`.
2. Denial of Service (DoS) due to unbounded text input length in `<textarea>`.

**Learning:**
1. The `image/*` wildcard in file upload acceptance filters inadvertently allows potentially malicious image types such as `image/svg+xml`. SVGs can contain embedded scripts (e.g., `<script>alert(1)</script>`) which execute when rendered.
2. Form fields like `<textarea>` and `<input>` without explicit length boundaries allow users to input exceptionally large strings. This can lead to significant memory consumption, browser UI freezing, or high server load if the payload is processed or submitted.

**Prevention:**
1. Always explicitly allowlist safe MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`) instead of relying on generic wildcards when implementing file uploads.
2. Consistently apply reasonable `maxLength` limits to all text input fields.