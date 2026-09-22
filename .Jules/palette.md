## 2024-03-20 - Ensure Keyboard Accessibility for Hover-Revealed Elements
**Learning:** Interactive elements hidden behind a `group-hover:opacity-100` state are inaccessible to keyboard users because they cannot hover to reveal them.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container so that tabbing into the hidden element reveals it.
