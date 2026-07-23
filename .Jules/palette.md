## 2024-07-23 - Keyboard Accessibility for Hover-Revealed Elements
**Learning:** When using Tailwind's `group-hover:opacity-100` to reveal interactive elements (like a download button appearing over an image on hover), they remain invisible to keyboard users who tab through the page.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container to ensure the interactive elements are revealed and accessible via keyboard navigation.
