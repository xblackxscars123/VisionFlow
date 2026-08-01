## 2025-02-27 - Added Accessible Download Button Overlay
**Learning:** Found a pattern where interactive overlay elements (like download buttons on image results) were using `group-hover:opacity-100` without a keyboard-accessible equivalent, making the elements invisible and inaccessible to keyboard users navigating via Tab.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on container elements, and ensure child interactive elements have clear focus states (e.g., `focus-visible:ring-4`) and aria-labels when they are icon-only.
