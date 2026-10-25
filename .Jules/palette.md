## 2024-10-25 - Accessible Hover Overlays
**Learning:** When hiding interactive elements (like icon buttons) in overlays using group-hover, they become inaccessible to keyboard users navigating via Tab.
**Action:** Always pair group-hover:opacity-100 with group-focus-within:opacity-100 on the parent container, and ensure the interactive elements have focus-visible styles and ARIA labels.
