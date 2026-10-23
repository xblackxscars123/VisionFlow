## 2026-10-23 - Focus Visibility on Hover-Revealed Actions
**Learning:** Using `opacity-0` with `group-hover:opacity-100` to hide interactive elements like icon buttons makes them invisible to keyboard users who tab to them, breaking accessibility.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container, and add `focus-visible:ring` to the child element so keyboard navigation reveals and highlights the action.
