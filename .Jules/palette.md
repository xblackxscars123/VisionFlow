## 2024-05-18 - Keyboard Accessibility on Hover-Revealed Elements
**Learning:** Interactive elements revealed only via `group-hover:opacity-100` in image overlays become invisible traps for keyboard users. While they can receive focus, the user cannot see what they are focused on.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the container to ensure overlays appear during keyboard navigation, and add `aria-label` to the revealed icon-only buttons.
