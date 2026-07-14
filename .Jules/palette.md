## 2026-07-14 - Keyboard accessibility for hover states
**Learning:** When using Tailwind's hover states (like `group-hover:opacity-100`) to reveal interactive elements, they remain invisible and inaccessible to keyboard users because hover doesn't trigger on focus.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container. This ensures that when an interactive element inside the container receives focus, the container becomes visible.
