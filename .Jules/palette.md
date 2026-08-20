## 2023-10-27 - [Add ARIA Label and Keyboard Support to Download Button]
**Learning:** Found that the final result download button lacked an `aria-label` and relied on hover states `group-hover:opacity-100` without a keyboard equivalent.
**Action:** Always ensure that elements revealed on hover (`group-hover:opacity-100`) also reveal on focus (`group-focus-within:opacity-100`) and that icon-only buttons include `aria-label` attributes with focus-visible outlines.
