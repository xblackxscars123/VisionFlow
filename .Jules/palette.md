## 2024-03-20 - Ensure Keyboard Accessibility for Hover Overlays
**Learning:** Icon-only interactive elements hidden inside `group-hover:opacity-100` containers are inaccessible via keyboard navigation because focusing them does not trigger the hover state.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container, and ensure the interactive element has an `aria-label` and `focus-visible` outline styles.
