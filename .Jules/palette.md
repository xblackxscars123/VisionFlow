## 2023-10-24 - Keyboard Accessibility for Hover-Revealed Elements
**Learning:** Interactive elements hidden behind group-hover:opacity-100 are invisible to keyboard users when focused.
**Action:** Always pair group-hover:opacity-100 with group-focus-within:opacity-100 on the parent container, and provide explicit focus-visible styles to the interactive children.
