## 2023-10-30 - Keyboard Accessibility for Hover States
**Learning:** When hiding interactive elements (like icon-only buttons) behind a group-hover:opacity-100 class, keyboard users cannot tab to them because they remain invisible.
**Action:** Always pair group-hover:opacity-100 with group-focus-within:opacity-100 on the parent container, and add focus-visible:ring utilities to the button to ensure keyboard accessibility.
