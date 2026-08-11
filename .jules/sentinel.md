## 2025-03-09 - [HIGH] Prevent SVG-based XSS in react-dropzone
**Vulnerability:** The application was using the generic `image/*` MIME type wildcard for file uploads via `react-dropzone`. This allowed potentially malicious SVG files containing executable scripts to be uploaded, resulting in a Cross-Site Scripting (XSS) vulnerability.
**Learning:** Generic file type wildcards like `image/*` are dangerous as they implicitly allow unexpected file formats (like SVG or even crafted HTML disguised as an image in some contexts) which can execute scripts when served or rendered by the application.
**Prevention:** Always explicitly allowlist safe MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`) instead of relying on wildcards in file upload components like `react-dropzone`.

## 2025-03-09 - [MEDIUM] Prevent DoS via large inputs in textarea
**Vulnerability:** The `<textarea>` input used for generating image prompts lacked a `maxLength` restriction.
**Learning:** Allowing unbound text input in fields can lead to Denial of Service (DoS) conditions where overly large inputs consume excessive memory or processing time on the client or server.
**Prevention:** Always ensure text inputs have reasonable `maxLength` limits to prevent performance degradation and DoS vulnerabilities.
