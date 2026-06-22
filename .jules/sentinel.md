## 2025-03-09 - Information Leakage via Error Messages
**Vulnerability:** The application was exposing raw API error messages directly to the UI in `src/App.tsx`.
**Learning:** This is a common pattern where developers log and display the same error object. Exposing raw error strings from underlying services or libraries (like the Gemini API) can leak sensitive information about the backend architecture, API behavior, or internal state to the end user.
**Prevention:** Implement a clear boundary between backend/API errors and frontend display. Always log the raw error for debugging but provide generic, safe error messages to the user (e.g., "An error occurred during processing. Please try again later.").
