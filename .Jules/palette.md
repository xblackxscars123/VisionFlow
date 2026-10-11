## 2025-02-28 - Keyboard accessibility for hover-revealed actions
**Learning:** Using `group-hover:opacity-100` to reveal interactive elements (like a download button over an image) completely hides them from keyboard-only users who navigate via Tab.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent, and ensure the revealed interactive element has a visible focus state (e.g., `focus-visible:ring-2`) and an `aria-label` if it's icon-only.
