## 2024-05-17 - Keyboard Accessibility for Hover-Revealed Actions
**Learning:** When using Tailwind's `group-hover` to reveal interactive elements (like an overlay with a download button), it creates a trap for keyboard users because they cannot "hover" to see the element before trying to focus it, or when focused it remains invisible.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container. This ensures that when a user tabs into the hidden element, the container becomes visible, making the focus state clear and the action discoverable.
