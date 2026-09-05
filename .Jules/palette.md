## 2024-05-24 - Interactive Elements in Hover Containers
**Learning:** When using Tailwind's `group-hover:opacity-100` to reveal interactive elements (like a download button over an image), those elements become inaccessible via keyboard navigation because they remain visually hidden when focused.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container, ensure icon-only buttons have an `aria-label`, and add `focus-visible` styles to maintain strict keyboard accessibility.
