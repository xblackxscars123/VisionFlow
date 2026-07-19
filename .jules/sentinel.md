## 2025-03-09 - SVG-based XSS via Generic Image Allowlist and DoS Risk via Unbounded Inputs
**Vulnerability:**
1. The `react-dropzone` implementation accepted any file matching `image/*`. This wildcard matching allows `.svg` files to be uploaded. SVGs can contain embedded JavaScript (e.g., `<script>` tags), which would execute when rendered in the DOM leading to Cross-Site Scripting (XSS).
2. The prompt `<textarea>` input lacked any `maxLength` restriction. Submitting exceedingly large strings to text analysis models or rendering them can lead to performance degradation or Denial of Service (DoS).

**Learning:**
Relying on implicit constraints (like `image/*` mapping intuitively only to safe bitmap types) or client-side context (e.g., assuming users will only input brief, reasonable prompts) opens the system up to trivial exploitation. Client-side state and file uploads must be strictly validated.

**Prevention:**
- Always explicitly allowlist expected, safe MIME types (e.g., `{'image/jpeg': [], 'image/png': [], 'image/webp': []}`) rather than using broad wildcards for file uploads.
- Ensure all unconstrained text inputs have explicit `maxLength` limits matching the practical constraints of the underlying business logic.
