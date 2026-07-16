## 2024-05-18 - File Upload and Input Constraints
**Vulnerability:** XSS via SVG file uploads and potential DoS via unrestricted text inputs. The application used `accept: { 'image/*': [] }` in `useDropzone`, which permits `.svg` files that can contain embedded scripts. Additionally, the prompt `<textarea>` had no `maxLength`, allowing unbounded input that could cause performance degradation or DoS.
**Learning:** Using generic wildcards like `image/*` is unsafe because it includes executable formats like SVG. Input fields should always have strict bounds to prevent excessive memory/CPU consumption.
**Prevention:** Always explicitly allowlist safe MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`) for image uploads. Always set `maxLength` on text inputs.
