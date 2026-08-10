## 2024-08-10 - File Upload XSS and DoS Prevention
**Vulnerability:** Unrestricted file uploads allowing any image type (`image/*`), including potentially malicious SVGs, and lack of length limitation on the generation prompt textarea, exposing the application to DoS attacks via extremely large text inputs.
**Learning:** Broad wildcard accept lists in `useDropzone` can be dangerous if they permit file types like `.svg` that can carry executable script payloads (XSS). Unbounded text inputs also introduce performance and DoS risks.
**Prevention:** Always use strict MIME type allowlists (e.g., `image/jpeg`, `image/png`, `image/webp`) instead of generic wildcards, and ensure all text inputs have explicit `maxLength` limits.
