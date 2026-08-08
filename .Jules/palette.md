## 2024-05-24 - Accessibility for hover-revealed elements
**Learning:** Tailwind `group-hover:opacity-100` patterns used to reveal interactive elements (like the download button over an image) must be paired with `group-focus-within:opacity-100` to ensure keyboard accessibility, otherwise keyboard users cannot see the focused element.
**Action:** Always add `group-focus-within:opacity-100` when using `group-hover:opacity-100` to show focusable UI elements.
