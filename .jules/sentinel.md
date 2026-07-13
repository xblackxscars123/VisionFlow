## 2025-03-08 - [High] Input Vulnerabilities: XSS and DoS
**Vulnerability:** The `react-dropzone` configuration used a wildcard `image/*` which allows malicious SVGs containing XSS payloads to be uploaded. Additionally, the `textarea` lacked length constraints, posing a risk for DoS attacks and performance degradation via excessively large text strings.
**Learning:** Generic wildcard MIME types are insufficient for security. We must explicitly define safe formats. Also, unbound text inputs are vectors for resource exhaustion.
**Prevention:** Always use explicit, allow-listed MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`) in file upload components. Ensure all text inputs, particularly those bound to UI state or sent to APIs, have a reasonable `maxLength` attribute.
