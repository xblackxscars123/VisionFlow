## 2024-09-28 - Unrestricted File Upload and Missing Input Limits
**Vulnerability:** The application used a generic wildcard `image/*` in `react-dropzone` which allows SVG uploads (potential SVG-based XSS), and lacked length limits on text inputs (potential DoS).
**Learning:** Generic wildcards like `image/*` cover risky formats like `image/svg+xml`. Text inputs without limits can be abused to send massive payloads, degrading performance.
**Prevention:** Explicitly allowlist safe MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`) and always add reasonable `maxLength` limits to inputs/textareas.
