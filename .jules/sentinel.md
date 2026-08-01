## 2024-05-24 - [react-dropzone SVG XSS and text area DoS]
**Vulnerability:** SVG-based XSS via generic `image/*` file upload allowlist and DoS via unbounded textarea length.
**Learning:** Even client-only React applications using popular upload libraries can inadvertently accept malicious files if the MIME types are too generic. Furthermore, large text inputs sent to LLM APIs can cause cost or performance issues without explicit limits.
**Prevention:** Always explicitly allowlist exact, safe MIME types (e.g., `image/png`, `image/jpeg`) in file uploads rather than using `image/*`, and enforce `maxLength` properties on text inputs.
