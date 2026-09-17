## 2024-05-24 - [Keyboard Navigation on Hover Elements]
**Learning:** Elements revealed only via `group-hover` become invisible traps for keyboard users because `opacity-0` hides them even when they receive focus.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on parent containers to ensure interactive children remain visible during keyboard navigation.
