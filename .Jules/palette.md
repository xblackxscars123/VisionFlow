## 2024-03-24 - Hover-only actions hide critical functionality
**Learning:** Icon-only actions within hover overlays (like image download buttons) are completely inaccessible to keyboard users if they only rely on `group-hover`. This hides primary functionality from those using tab navigation.
**Action:** Always add `focus-within:opacity-100` to hover overlay containers and provide an `aria-label` along with visible focus states (`focus:ring-4`) for icon-only buttons.
