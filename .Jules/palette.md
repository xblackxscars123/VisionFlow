## 2024-07-04 - Keyboard Accessibility for Hover-Revealed Elements
**Learning:** Interactive elements revealed solely via `group-hover:opacity-100` are completely inaccessible to keyboard users because they cannot hover over the container to reveal the element and tab to it.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container. This ensures that when a keyboard user tabs into the hidden element, the entire container reveals it, making it accessible and usable.
