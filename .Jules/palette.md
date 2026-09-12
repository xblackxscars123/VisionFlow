## 2024-09-12 - Keyboard Accessibility for Hover-Revealed Elements
**Learning:** Interactive elements hidden behind a `group-hover:opacity-100` state (like image overlay actions) remain completely invisible to keyboard users when focused, breaking accessibility.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the container holding focusable elements.
