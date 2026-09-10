## 2024-05-24 - [Strict MIME Type and Input Validation]
**Vulnerability:** Generic `image/*` accept types in file uploads allow dangerous SVG files which can lead to XSS. Textareas without `maxLength` can lead to performance degradation or DoS.
**Learning:** Always use strict MIME type allowlists for file uploads instead of wildcards, and always set `maxLength` on text inputs.
**Prevention:** Explicitly define safe image types (e.g., `image/jpeg`, `image/png`, `image/webp`) in dropzone configs and set reasonable max lengths on user inputs.
