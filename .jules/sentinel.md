## 2024-05-24 - [Fix File Upload XSS and Text Input DoS]
**Vulnerability:** The `react-dropzone` component accepted generic `image/*` MIME types, allowing potential SVG-based XSS attacks. The prompt `textarea` lacked a `maxLength` attribute, introducing a DoS risk.
**Learning:** Using wildcard MIME types like `image/*` can inadvertently allow malicious file formats like SVG which execute scripts. Unbounded text inputs can lead to performance issues or DoS when massive strings are submitted.
**Prevention:** Always explicitly allowlist safe MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`) and enforce reasonable `maxLength` limits on user text inputs.
