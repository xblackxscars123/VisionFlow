## 2025-02-28 - Keyboard Accessible Hover States
**Learning:** Hidden interactive elements revealed on hover using `group-hover:opacity-100` are inaccessible to keyboard users because they cannot be seen when tabbing into them.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container so the child element becomes visible when focused via keyboard.
