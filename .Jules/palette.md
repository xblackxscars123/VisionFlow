## 2026-06-28 - Keyboard Accessible Hover Actions
**Learning:** Hidden interactive elements (like overlay buttons) revealed by `group-hover:opacity-100` remain invisible to keyboard users who navigate via the Tab key, causing critical accessibility failures.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container, and provide `focus-visible:ring-X` and clear `aria-label` attributes on the interactive child elements to ensure robust keyboard support.
