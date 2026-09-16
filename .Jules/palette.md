## 2024-05-15 - Accessible Overlay Buttons
**Learning:** When using Tailwind hover states (`group-hover:opacity-100`) to reveal interactive elements like overlay buttons, they become completely inaccessible to keyboard users because they can't be seen when tabbed to.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container. This ensures that when a user tabs into the hidden button, the container becomes visible, revealing the focused interactive element.
