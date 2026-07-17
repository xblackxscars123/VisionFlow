## 2024-07-17 - Keyboard Accessibility for Hover Overlays
**Learning:** When using Tailwind hover states (`group-hover:opacity-100`) to reveal interactive elements (like overlay buttons on an image), keyboard users cannot access them unless the overlay also appears on focus.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container, and add proper focus styles to the interactive element itself.
