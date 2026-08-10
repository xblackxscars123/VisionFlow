
## 2024-05-15 - Interactive Overlay Keyboard Accessibility
**Learning:** Using `group-hover` to show interactive overlays (like download buttons on hover) makes them inaccessible via keyboard because the elements remain hidden/opacity-0 on focus.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the container when interactive elements are inside. Ensure the interactive element has a visible focus state (e.g., `focus-visible:ring-2`) and an `aria-label` if it's an icon-only button.
