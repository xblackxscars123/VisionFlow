## 2024-05-15 - Interactive elements in hover states and icon-only buttons
**Learning:** Interactive elements hidden behind hover states (like a download icon appearing over an image) require `group-focus-within` on the parent to remain accessible via keyboard navigation. Additionally, icon-only buttons inherently lack context for screen readers and must have an explicit `aria-label`.
**Action:** Always pair `group-hover` with `group-focus-within` when containing interactive elements, and proactively add `aria-label` to buttons without visible text.
