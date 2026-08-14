## 2023-10-27 - File Upload XSS and Unbounded Input DoS Risk
**Vulnerability:** Generic `image/*` file acceptance allows SVG-based XSS attacks. Unbounded textarea input allows arbitrary large string processing, posing a DoS risk.
**Learning:** React-Dropzone defaults or generic wildcards like `image/*` don't explicitly filter out potentially dangerous image formats like SVGs, which can embed scripts. Unbounded text inputs without `maxLength` can be abused to degrade app performance.
**Prevention:** Always explicitly allowlist safe MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`) instead of relying on wildcards. Enforce reasonable `maxLength` limits on all text inputs.
