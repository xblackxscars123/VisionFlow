## 2024-06-03 - Accessible Hover Actions
**Learning:** Interactive elements hidden behind `group-hover:opacity-100` are invisible to keyboard users who tab to them, creating a confusing experience where focus disappears.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container, and ensure interactive child elements have clear focus rings and ARIA labels.
