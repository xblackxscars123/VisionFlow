## 2024-05-30 - Prevent SVG XSS and DoS in React Apps
**Vulnerability:** Generic `image/*` file uploads allowing malicious SVGs and text inputs without length limits.
**Learning:** Always use explicit MIME types for file uploads to block malicious SVGs, and cap text input lengths to prevent resource exhaustion.
**Prevention:** Use explicit types like `image/jpeg` in Dropzone and add `maxLength` to textareas.
