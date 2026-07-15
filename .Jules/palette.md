## 2026-07-15 - Focus Within for Interactive Hover States
**Learning:** Using `group-hover:opacity-100` to reveal interactive elements (like download buttons) makes them inaccessible to keyboard users because they cannot hover.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container, so when a keyboard user tabs into the hidden element, the container becomes visible. Also, ensure icon-only buttons have an `aria-label`.
