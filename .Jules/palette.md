## 2026-07-05 - Accessible Hover Menus & Icon Buttons
**Learning:** When using `group-hover:opacity-100` to reveal interactive elements (like an image overlay with buttons), it must be paired with `group-focus-within:opacity-100` on the container so keyboard users can discover and access the elements. Additionally, icon-only buttons need an explicit `aria-label` and visible focus styles to be accessible.
**Action:** Always combine hover states with focus-within states for overlays, and enforce ARIA labels + focus rings on all icon-only buttons.
