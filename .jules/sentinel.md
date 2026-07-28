## 2024-03-24 - DoS and SVG-based XSS vulnerability in user inputs and file uploads
**Vulnerability:**
1. Missing input length limits on the text area can lead to DoS.
2. The `react-dropzone` wildcard for `accept: { 'image/*': [] }` allows generic MIME types and introduces SVG-based XSS attacks.
**Learning:**
1. Text inputs inherently need limits or malicious bots can cause memory bloat leading to DoS.
2. File upload functionalities often use broad allowlists like `image/*` which inadvertently permit SVGs. Because SVG files can embed JavaScript, uploading and rendering them can execute arbitrary code on the client side (XSS).
**Prevention:**
1. Add a `maxLength` property to the text area input for bounding the character limits to prevent DoS.
2. Replace wildcard configurations (`image/*`) with explicit allowlists specifying safe MIME types like `image/jpeg`, `image/png`, and `image/webp`.