## 2024-08-16 - Overlay Accessibility Pattern
**Learning:** When using Tailwind hover states (`group-hover:opacity-100`) to reveal interactive elements within an overlay, they become inaccessible to keyboard users because focusing the element does not trigger the hover state.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container. Ensure the revealed interactive elements also have appropriate `focus-visible` styles (`focus-visible:scale-110`, `focus-visible:ring-2`) and ARIA labels.
