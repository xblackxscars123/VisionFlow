## 2024-05-24 - Interactive Elements in Hover Overlays
**Learning:** When using Tailwind's hover states (like `group-hover:opacity-100`) to reveal interactive elements in image overlays, those elements become inaccessible via keyboard navigation because they remain visually hidden.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container to ensure interactive elements become visible when receiving keyboard focus.
