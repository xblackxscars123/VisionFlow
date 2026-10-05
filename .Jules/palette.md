## 2024-05-20 - Keyboard Accessibility for Hover States
**Learning:** When using Tailwind's hover states (e.g., group-hover:opacity-100) to reveal hidden interactive elements, they become inaccessible to keyboard users because focus does not trigger the hover state.
**Action:** Always pair group-hover:opacity-100 with group-focus-within:opacity-100 on the parent container to ensure the hidden elements become visible when their children receive keyboard focus.
