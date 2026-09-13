## 2024-10-25 - SVG XSS and Uncapped Input DoS
**Vulnerability:** File upload allows generic `image/*` which permits SVGs that can execute JavaScript (XSS), and textarea lacks length limits allowing DoS.
**Learning:** Generic wildcards like `image/*` are dangerous in frontend uploaders. Text inputs without limits can cause performance issues.
**Prevention:** Explicitly whitelist safe MIME types (e.g., `image/jpeg`, `image/png`, `image/webp`) and always cap text input lengths with `maxLength`.
