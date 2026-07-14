## 2025-02-28 - SVG XSS and Input DoS Prevention
**Vulnerability:** The application was using a wildcard `image/*` accept type for file uploads and lacked length restrictions on text input.
**Learning:** Generic wildcard accept types like `image/*` allow potentially malicious SVG files which can execute scripts (XSS). Additionally, unbounded text inputs can cause performance degradation or DoS if extremely large payloads are processed by the frontend or sent to the backend.
**Prevention:** Explicitly allowlist safe MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`) instead of wildcards for uploads. Always add a `maxLength` attribute to text inputs and textareas to restrict payload sizes.
