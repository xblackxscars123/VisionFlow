## 2024-05-18 - Hover-Revealed Actions and Keyboard Accessibility
**Learning:** When using hover states (like `group-hover:opacity-100`) to reveal interactive elements on an image overlay, those elements become inaccessible to keyboard navigation because hover is not triggered.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container, and add clear `focus-visible` styles to the interactive element so keyboard users can navigate to and see the hidden actions.
