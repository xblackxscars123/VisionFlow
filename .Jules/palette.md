## 2024-05-16 - Make hover states keyboard accessible
**Learning:** When using `group-hover:opacity-100` to reveal interactive elements on hover, the elements remain hidden when a keyboard user tabs to them, breaking keyboard accessibility.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container to ensure the content is revealed when interactive children receive keyboard focus.
