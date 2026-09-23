## 2024-05-18 - Pairing group-hover with group-focus-within for keyboard accessibility
**Learning:** Elements relying solely on `group-hover` for visibility become completely inaccessible to keyboard users because they cannot be seen when focused.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on parent containers of interactive elements, and ensure child buttons have clear focus indicators and ARIA labels.
