## 2024-07-31 - Keyboard accessibility for hover-revealed elements
**Learning:** Interactive elements inside image overlays that are revealed using Tailwind's `group-hover:opacity-100` are inaccessible via keyboard navigation by default, as keyboard focus does not trigger the hover state.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container to ensure the nested interactive elements become visible when focused via Tab.
