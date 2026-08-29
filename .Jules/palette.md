## 2026-08-29 - [Keyboard Accessibility for Overlay Buttons]
**Learning:** When using Tailwind's hover states (like `group-hover:opacity-100`) to reveal interactive elements within image overlays, they remain invisible and inaccessible to keyboard users during tab navigation unless specifically handled.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container, and add explicit `focus-visible:ring` styles to the interactive elements.
