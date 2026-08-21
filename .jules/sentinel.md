## 2024-05-20 - Prevent SVG XSS in file uploads
**Vulnerability:** File upload implementations using react-dropzone relied on generic wildcard `image/*` MIME type acceptance. This inadvertently allows `.svg` files (`image/svg+xml`) to be uploaded and potentially displayed or processed.
**Learning:** SVG files can contain embedded `<script>` tags, making them a common vector for Stored XSS if they are rendered in the DOM or manipulated unsafely by the backend. The frontend should proactively filter these out.
**Prevention:** Always explicitly allowlist only safe image formats (e.g., `image/jpeg`, `image/png`, `image/webp`) in dropzone configurations rather than using wildcards, and ensure inputs have a `maxLength` to mitigate DoS vectors on the prompt submission.
