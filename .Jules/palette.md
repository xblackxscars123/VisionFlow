## 2025-03-01 - Hover-Only State Accessibility Trap

**Learning:** Using Tailwind's `group-hover:opacity-100` to reveal interactive elements creates a severe accessibility trap for keyboard users. When users tab through the interface, the focus might land on an element (like a button) that is visually hidden (`opacity-0`), making it impossible to know where the focus is or what action can be taken.

**Action:** Whenever using hover states to reveal interactive children elements (e.g., `group-hover:opacity-100`), always pair it with the corresponding focus state on the parent container (e.g., `group-focus-within:opacity-100`). This ensures that when a keyboard user tabs into the hidden element, the container becomes visible, revealing the focused element. Additionally, ensure the element itself has proper focus indication (e.g., `focus-visible:ring-2`) and aria labels if it is icon-only.
