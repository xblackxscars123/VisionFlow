## 2025-06-25 - [Accessibility Issue in Hover Overlays]
**Learning:** Tailwind's hover states (like `group-hover:opacity-100`) to reveal interactive elements break accessibility for keyboard-only users who navigate via Tab.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container, and add `focus-visible:ring` or custom outlines to the actionable buttons to ensure they remain visible and interactive via keyboard.
