
## 2025-03-08 - Accessible Icon-Only Action Buttons in Hover Cards
**Learning:** Found an icon-only download button hidden behind a hover state (`group-hover:opacity-100`) without an `aria-label` or keyboard focus visibility (`group-focus-within:opacity-100`). Screen reader users wouldn't know what the button does, and keyboard users couldn't see it when tabbing to it.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` when concealing interactive elements, and mandate `aria-label` on all icon-only buttons along with clear `focus-visible` rings.
