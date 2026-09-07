## 2024-03-20 - [Hover States and Keyboard Accessibility]
**Learning:** When hiding interactive elements (like icon-only download buttons) behind a container's `group-hover:opacity-100`, keyboard users cannot see the element when they focus it.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the overlay container, and ensure all icon-only buttons receive an `aria-label` and clear `focus-visible` styles.
