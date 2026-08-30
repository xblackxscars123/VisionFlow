## 2024-10-27 - Keyboard Accessible Hover Overlays
**Learning:** Hover states (like `group-hover:opacity-100`) used to reveal interactive elements or critical information make that content inaccessible to keyboard users unless paired with equivalent focus states.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` (for elements containing focusable children) or `group-focus:opacity-100` (for the focusable element itself) to ensure the hidden content becomes visible during keyboard navigation.
