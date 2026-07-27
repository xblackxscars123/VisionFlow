## 2024-05-15 - Interactive overlays need focus support
**Learning:** When using `opacity-0 group-hover:opacity-100` on a container to reveal child buttons on hover, keyboard users cannot see the buttons when they tab to them unless the container also becomes visible on focus.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent, and ensure child elements have proper `focus-visible` states and ARIA labels.
