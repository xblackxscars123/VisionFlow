## 2024-05-18 - Keyboard Access for Hover-revealed Actions
**Learning:** Hover-revealed interactive elements (like image download overlay buttons) become completely inaccessible via keyboard navigation if they only rely on `group-hover`.
**Action:** Always pair Tailwind's `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container to ensure hidden buttons become visible when they receive focus via the Tab key.
