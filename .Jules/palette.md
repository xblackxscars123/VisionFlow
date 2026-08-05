## 2024-05-18 - Missing ARIA labels and focus states on hover-revealed elements
**Learning:** Elements hidden by `opacity-0` and revealed on hover (`group-hover:opacity-100`) often become invisible focus traps for keyboard users because focus doesn't trigger the hover state.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container, and add `focus-visible:ring` to the interactive element itself.
