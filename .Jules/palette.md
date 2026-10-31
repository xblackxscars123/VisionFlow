## 2023-10-31 - Accessible Hover Overlays
**Learning:** Hidden overlays on hover (like `opacity-0 group-hover:opacity-100`) make interactive elements inside them completely invisible to keyboard users when focused.
**Action:** Always add `focus-within:opacity-100` to hover overlays containing interactive elements, and pair with clear focus-visible styles on the elements themselves for keyboard navigation.
