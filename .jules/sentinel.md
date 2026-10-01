## 2024-05-16 - Prevent SVG XSS and DoS in inputs
**Vulnerability:** File upload allows all image types ('image/*') including SVGs which can contain malicious scripts (XSS). Textarea lacks length limits, which can cause DoS.
**Learning:** Using generic wildcards for file uploads is risky, and unrestricted text inputs can cause performance degradation.
**Prevention:** Explicitly allowlist safe MIME types (image/jpeg, image/png, image/webp) and enforce maxLength on text inputs.
