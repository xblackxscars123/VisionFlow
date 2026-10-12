## 2025-02-27 - Interactive Overlay Keyboard Accessibility
**Learning:** When using Tailwind's `group-hover` to reveal hidden interactive elements (like a download button inside an image overlay), keyboard users cannot access them unless `group-focus-within` is also applied to the parent container.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container to ensure keyboard accessibility, and provide clear `focus-visible` states on the revealed interactive elements.
