## 2024-07-09 - [SVG XSS and DoS Prevention]
**Vulnerability:** The `react-dropzone` implementation accepted any file type (`'image/*': []`), opening the door to malicious SVG uploads containing XSS payloads. Additionally, the prompt `<textarea>` had no input length restrictions, presenting a potential DoS vulnerability from overly large inputs.
**Learning:** Generic MIME type wildcards like `image/*` should not be trusted. Inputs, especially those sent to APIs, must be explicitly restricted in length.
**Prevention:** Explicitly allowlist only safe MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`) when configuring file uploads. Always implement `maxLength` limits on user text inputs.
