
## 2023-10-25 - [Interactive elements hidden on hover]
**Learning:** Interactive elements hidden behind `group-hover:opacity-100` are invisible during keyboard navigation, breaking accessibility.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container to ensure keyboard users can see the element when it receives focus, and ensure icon-only buttons have an `aria-label` and `focus-visible` styling.
