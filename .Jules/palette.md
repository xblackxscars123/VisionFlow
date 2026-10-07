## 2024-10-24 - Accessible Overlay Buttons
**Learning:** Icon-only buttons within hover-revealed overlays become completely invisible to keyboard users when they receive focus, creating a hidden tab stop.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container, and add explicit `aria-label`s to icon-only buttons.
