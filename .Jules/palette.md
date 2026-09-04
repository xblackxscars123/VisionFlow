## 2024-03-20 - Keyboard Accessibility for Hover-Revealed Elements
**Learning:** Elements revealed on hover (like `group-hover:opacity-100`) remain invisible to keyboard users who tab to them, creating an inaccessible trap.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container so inner focusable elements reveal themselves during keyboard navigation, and ensure icon-only buttons have `aria-label`.
