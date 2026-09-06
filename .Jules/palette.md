## 2025-02-26 - Keyboard accessibility for hover-revealed elements
**Learning:** When using Tailwind's hover states (`group-hover:opacity-100`) to reveal interactive elements like buttons, keyboard users cannot access them unless the parent container also reveals them on focus (`group-focus-within:opacity-100`).
**Action:** Always pair `group-hover` visibility toggles with `group-focus-within` to ensure interactive children remain visible and accessible via keyboard navigation.
