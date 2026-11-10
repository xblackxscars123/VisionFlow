## 2026-11-10 - Focus Trap on Hover Overlays
**Learning:** Interactive elements inside hover-only overlays (opacity-0 group-hover:opacity-100) are invisible during keyboard navigation but still receive focus, causing confusing focus traps for keyboard/screen reader users.
**Action:** Always add focus-within:opacity-100 to the overlay container when it contains focusable elements, and provide explicit focus-visible states for the interactive elements within it.
