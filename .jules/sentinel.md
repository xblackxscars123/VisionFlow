## 2025-03-03 - [Fix File Upload XSS and Textarea DoS]
**Vulnerability:** File upload allowed generic `image/*` risking SVG-based XSS attacks. Textarea missed length limit risking application-level DoS.
**Learning:** Broad MIME types like `image/*` pass browser-level validation for vectors and custom files. Lack of input constraints creates payload exhaustion risks.
**Prevention:** Explicitly allowlist specific and safe MIME types (`image/jpeg, image/png, image/webp`). Always use `maxLength` on form text inputs.
