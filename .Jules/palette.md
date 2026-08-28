## 2024-08-28 - Keyboard Accessibility for Hover-Revealed Elements
**Learning:** When hiding interactive elements (like icon-only buttons) inside containers that reveal on hover (e.g., `group-hover:opacity-100`), they become inaccessible via keyboard navigation because focusing the hidden element doesn't trigger the hover state of the parent.
**Action:** Always pair `group-hover` with `group-focus-within` on the parent container (e.g., `group-focus-within:opacity-100`) so that when a keyboard user tabs to an element inside, the container correctly reveals it.
