## 2024-05-18 - Restrict MIME Types and Input Lengths
**Vulnerability:** Unrestricted file uploads using `image/*` in `react-dropzone` and unbounded text inputs.
**Learning:** Generic `image/*` wildcards can allow malicious SVG uploads leading to XSS. Unbounded text inputs can cause client-side DoS or performance degradation.
**Prevention:** Explicitly allowlist safe MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`) and enforce `maxLength` on all user inputs.
