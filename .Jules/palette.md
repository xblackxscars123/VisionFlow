## 2024-05-24 - Interactive Elements Hidden Behind Hover States
**Learning:** When using Tailwind hover states to reveal interactive elements (like an overlay with a button), keyboard users cannot access them unless the parent also responds to focus.
**Action:** Always pair group-hover:opacity-100 with group-focus-within:opacity-100 on the parent container to ensure keyboard accessibility.
