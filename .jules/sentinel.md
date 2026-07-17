
## 2024-05-24 - [Fix File Upload XSS and Unbounded Text DoS]
**Vulnerability:** The application used a generic `image/*` wildcard in `react-dropzone` which could allow SVG uploads leading to Stored/Reflected XSS. The prompt text area also had no length limit, creating a potential DoS vector.
**Learning:** Generic file types like `image/*` should always be avoided in favor of explicit safe allowlists. User input should always have bounded limits.
**Prevention:** Explicitly list safe MIME types like `image/jpeg`, `image/png`, and `image/webp`. Add `maxLength` attributes to all text inputs.
