## 2025-02-26 - [XSS via Image Uploads]
**Vulnerability:** The `react-dropzone` input allowed all image types (`image/*`), potentially including SVGs with embedded scripts that could execute when rendered by the browser or a headless worker.
**Learning:** Generic wildcard MIME type matching for image uploads is dangerous because it implicitly trusts SVG uploads, which are executable XML documents capable of containing JavaScript (Stored/Reflected XSS).
**Prevention:** Always explicitly allowlist safe, raster image formats (`image/jpeg`, `image/png`, `image/webp`) instead of relying on wildcards.

## 2025-02-26 - [DoS via Unbounded Text Input]
**Vulnerability:** A `<textarea>` used for user prompts did not restrict input length, creating a vector for application-layer Denial of Service by sending gigabytes of text data in a single request.
**Learning:** Any user input that interacts with APIs or databases must be constrained by sensible length limits to prevent buffer bloat, API abuse, and excessive performance degradation.
**Prevention:** Always add a strict `maxLength` attribute to text fields based on functional requirements.
