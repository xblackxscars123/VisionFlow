## 2024-05-23 - Keyboard Accessibility for Hover Overlays
**Learning:** Using `group-hover:opacity-100` on a container to reveal interactive elements (like icon buttons) hides them from keyboard-only users who navigate via Tab.
**Action:** Always pair `group-hover` with `group-focus-within` on the container, and ensure revealed interactive elements have visible focus indicators (`focus-visible:ring-*`) and ARIA labels.
