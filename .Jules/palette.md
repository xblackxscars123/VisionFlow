## 2024-07-06 - Image Overlay Keyboard Accessibility
**Learning:** When using Tailwind`s `group-hover:opacity-100` to reveal interactive elements (like icon buttons over images), these elements become inaccessible to keyboard users because they remain visually hidden (`opacity-0`) when focused.
**Action:** Always pair `group-hover:opacity-100` on hidden interactive overlays with `group-focus-within:opacity-100` on the parent container, and add `focus-visible` styles to the interactive element itself to ensure it is both visible and clearly focused during keyboard navigation.
