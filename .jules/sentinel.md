## 2025-02-27 - [Prevent SVG XSS and Text Input DoS]
**Vulnerability:** The `react-dropzone` implementation accepted any file type via `{'image/*': []}` allowing potential SVG-based XSS attacks. The prompt `<textarea>` had no input limits allowing arbitrary large strings and causing potential DoS vulnerabilities.
**Learning:** Generic wildcards like `image/*` should be avoided for file uploads. Explicitly specify safe MIME types. Additionally, any user input should have explicit length limits.
**Prevention:** Always explicitly allowlist MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`) in file input configurations and add a sensible `maxLength` for all text input elements.
