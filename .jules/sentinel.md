## 2024-05-18 - [Fix SVG XSS and Input DoS]
**Vulnerability:** The application used `{ 'image/*': [] }` in `react-dropzone`, which allows malicious SVGs containing script tags to be uploaded, presenting an XSS vulnerability. Additionally, a textarea input lacked a `maxLength` attribute, introducing a minor DoS vector due to uncontrolled input length.
**Learning:** Generic `image/*` wildcards in file upload components fail to prevent SVG uploads. Textarea inputs inherently need a limit on maximum length.
**Prevention:** Explicitly specify allowed safe MIME types like `image/jpeg`, `image/png`, and `image/webp`. Always apply a `maxLength` restriction on user input text fields.
