## 2023-10-25 - Fix XSS and DoS vulnerabilities in inputs
**Vulnerability:** Generic `image/*` MIME type allowed SVG uploads, and unbounded `textarea` allowed massive text input.
**Learning:** `react-dropzone` with wildcards permits malicious file types like SVGs which can execute JS. Unbounded inputs degrade client performance.
**Prevention:** Explicitly allowlist safe MIME types (e.g., image/jpeg, image/png) and set reasonable `maxLength` attributes on text inputs.
