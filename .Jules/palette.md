## 2025-02-27 - Accessible Image Overlay Actions
**Learning:** Icon-only actions hidden inside `group-hover` overlays become completely invisible to keyboard users who can tab to the buttons but cannot see them or know what they do.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the container, and ensure icon-only buttons have an `aria-label` and distinct `focus-visible` ring.
