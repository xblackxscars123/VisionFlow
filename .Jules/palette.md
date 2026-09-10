## 2024-05-24 - [A11y] Keyboard Accessible Overlays
**Learning:** When using Tailwind's hover states (like `group-hover:opacity-100`) to reveal interactive elements in image overlays, it completely hides those elements from keyboard-only users.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container so that when an inner element receives focus, the overlay becomes visible.
