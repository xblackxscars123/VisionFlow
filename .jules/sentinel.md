## 2025-06-23 - [Information Leakage / App-level DoS]
**Vulnerability:** Raw error message leakage & Unbounded File/Text Inputs.
**Learning:** Application blindly caught API error details and displayed them verbatim to users, opening a path for accidental information disclosure. File dropzones and text inputs lacked upper limits (`maxSize` and `maxLength`), posing client-side performance and availability risks.
**Prevention:** Implement `maxSize` (e.g., 5MB) on `react-dropzone`, `maxLength` on form elements, and decouple UI error boundaries from raw internal error messages.
