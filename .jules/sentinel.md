## 2024-10-24 - Unrestricted File Upload and Text Input Length
**Vulnerability:** The application used wildcard `image/*` MIME types in `react-dropzone` (allowing potentially malicious SVG files for XSS) and lacked a `maxLength` on the prompt textarea (risking performance degradation and DoS from extremely large text inputs).
**Learning:** Generic MIME wildcards (`image/*`) in file upload components are often assumed safe but actually permit execution contexts like SVGs, which can contain JavaScript. Unbounded text inputs can freeze the UI or exhaust backend resources.
**Prevention:** Explicitly allowlist safe MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`) in file input configurations and always add `maxLength` limits to `<textarea>` and text inputs.
