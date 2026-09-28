## 2025-10-27 - Keyboard Inaccessible Hover States
**Learning:** The app uses `group-hover:opacity-100` on a parent element to reveal a hidden icon-only download button. This makes the button completely invisible to keyboard users who tab to it because the hover state isn't triggered.
**Action:** Always pair `group-hover` visibility toggles with `group-focus-within` on the parent container. Additionally, provide `aria-label` and `focus-visible` styles to ensure icon-only buttons remain accessible and clearly focused.
