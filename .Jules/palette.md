## 2024-05-19 - Accessible Hover States
**Learning:** Icon-only buttons revealed via Tailwind hover states (`group-hover:opacity-100`) are invisible to keyboard users. Without `aria-label` and `group-focus-within:opacity-100`, they create a severe accessibility barrier for screen readers and keyboard navigation.
**Action:** Always pair `group-hover` visibility toggles with `group-focus-within` on the parent, and ensure icon-only buttons have descriptive `aria-label`s and `focus-visible` styling.
