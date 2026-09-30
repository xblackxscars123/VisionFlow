## 2024-05-24 - Interactive Elements Hidden Behind Hover States
**Learning:** Hiding interactive elements (like download buttons) behind CSS `group-hover:opacity-100` makes them inaccessible to keyboard navigation if not paired with `group-focus-within:opacity-100`. The element might receive focus but remains invisible to the user.
**Action:** When using hover states to reveal interactive elements, always pair it with a `focus-within` equivalent on the parent container to ensure keyboard accessibility.
