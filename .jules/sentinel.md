## 2026-06-30 - [Input Validation and DoS Prevention]
**Vulnerability:** The application used wildcard 'image/*' for file uploads via useDropzone, which could potentially allow SVG-based XSS attacks. The prompt textarea also lacked a maxLength constraint, which could lead to performance degradation or DoS vulnerabilities from excessively large inputs.
**Learning:** It's important to be explicit about allowed file types and to constrain unbounded text inputs to prevent misuse.
**Prevention:** Always allowlist specific MIME types (e.g., 'image/jpeg', 'image/png') instead of using generic wildcards, and always apply maxLength limits to text inputs.
