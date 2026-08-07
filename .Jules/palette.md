## 2024-08-07 - Ensure visibility of interactive overlays on focus
**Learning:** Tailwind's `group-hover:opacity-100` on overlay containers makes interactive elements inside them visible on mouse hover, but completely hides them for keyboard users when they tab through the page.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` (and ensure the parent element has the `group` class) so the overlay becomes visible when its interactive children receive keyboard focus.
