## 2024-05-15 - Missing Keyboard Focus on Hover-Revealed Actions
**Learning:** Hover states (e.g., `group-hover:opacity-100`) used to reveal interactive elements (like a download button on an image overlay) must be paired with `group-focus-within:opacity-100` on the parent container. Otherwise, the element remains hidden and inaccessible during keyboard navigation.
**Action:** Always verify that interactive elements revealed on hover have equivalent keyboard focus mechanisms (`focus-within` on containers, clear `focus-visible` styles on elements).
