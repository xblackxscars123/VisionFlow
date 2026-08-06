## 2025-03-05 - Missing Keyboard Access for Hover Overlays
**Learning:** Using `group-hover:opacity-100` to reveal interactive elements (like the download button on images) hides those elements from keyboard-only users who can't trigger hover states.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container. This ensures that when a keyboard user tabs into an element inside the overlay, the overlay becomes visible. Also ensure the inner element has an appropriate `aria-label` and `focus-visible` ring.
