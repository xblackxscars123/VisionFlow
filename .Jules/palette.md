## 2025-08-11 - Group hover and focus states
**Learning:** Tailwind's `group-hover` can hide elements from keyboard users if not paired with `group-focus-within`. When using an overlay with `opacity-0` that transitions to `opacity-100` on `group-hover`, keyboard focus gets trapped because the element remains visually hidden unless hovered.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container to ensure interactive elements are visible when focused via keyboard.
