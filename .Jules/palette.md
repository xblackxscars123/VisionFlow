## 2026-10-21 - Interactive Overlay Accessibility
**Learning:** Using `group-hover:opacity-100` for overlays hides interactive elements from keyboard users because they tab into an invisible element.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the overlay, and ensure buttons have `focus-visible` styles and `aria-label`s for screen readers.
