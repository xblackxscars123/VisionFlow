## 2026-09-27 - Keyboard Navigation for Hover-Revealed Elements
**Learning:** Interactive elements hidden with `group-hover:opacity-100` remain invisible during keyboard navigation unless explicitly handled.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container to ensure accessibility.
