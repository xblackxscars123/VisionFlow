## 2024-03-01 - Prevent Error Message Data Leakage
**Vulnerability:** Raw error messages from caught exceptions (err.message) were being directly rendered in the UI via the setError state.
**Learning:** Passing err.message to user-facing UI can expose internal stack traces, API details, or file paths if the underlying service throws verbose errors.
**Prevention:** Always sanitize error messages shown to users. Log the full error server-side (or securely to console in client apps) but only display generic, safe error strings like "An error occurred" to the end user.
