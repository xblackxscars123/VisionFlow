## 2024-10-02 - Interactive Element Reveal Pattern
**Learning:** Using Tailwind's hover states (like `group-hover:opacity-100`) to reveal interactive elements can make them completely invisible and inaccessible to keyboard users unless explicitly handled.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container so that when a nested interactive element receives focus, the entire parent state behaves identically to mouse hover, ensuring elements remain visible.
