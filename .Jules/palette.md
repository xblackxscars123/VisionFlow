
## 2024-05-29 - [Icon-Only Button Accessibility in Image Hover States]
**Learning:** When using `group-hover:opacity-100` on a container to reveal icon-only action buttons (like a download button over an image), those buttons become completely inaccessible to keyboard users unless the container also has `group-focus-within:opacity-100`. Furthermore, icon-only buttons inherently require `aria-label` attributes to provide context for screen readers.
**Action:** Always pair `group-hover` with `group-focus-within` on the parent container when revealing interactive elements. Additionally, mandate `aria-label` and `focus-visible:ring-*` styles for all icon-only buttons to ensure full keyboard and screen reader accessibility.
