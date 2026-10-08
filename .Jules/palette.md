## 2025-02-27 - Keyboard accessibility for hidden hover elements
**Learning:** Hidden interactive elements (like action buttons over images revealed on hover) become inaccessible to keyboard navigation if the container only uses group-hover. They remain invisible but still focusable, creating "ghost" tab stops that confuse users.
**Action:** Always pair group-hover with group-focus-within on the container to ensure keyboard users can see the elements they navigate to.
