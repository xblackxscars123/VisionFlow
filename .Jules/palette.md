## 2024-05-20 - Ensure Keyboard Accessibility for Hover-Revealed Elements
**Learning:** Using Tailwind's `group-hover:opacity-100` hides interactive elements (like icon-only buttons) from visual keyboard users because the element receives focus but the container remains invisible.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container so it becomes visible when any child element receives focus via keyboard navigation.
