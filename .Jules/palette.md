## 2024-05-18 - Keyboard Accessibility for Hover-Revealed Actions
**Learning:** When actions (like download buttons) are revealed on hover (`group-hover:opacity-100`), they remain invisible during keyboard navigation unless explicitly handled, making them inaccessible to keyboard users.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container, ensure the interactive element has an `aria-label` (if icon-only), and add visible focus styles.
