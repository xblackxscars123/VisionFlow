## 2024-05-15 - Interactive elements hidden behind hover states must be focusable
**Learning:** When using Tailwind CSS `group-hover:opacity-100` to reveal interactive elements (like buttons) on hover, they become inaccessible via keyboard navigation because the opacity remains 0 during focus.
**Action:** Always pair `group-hover:opacity-100` on the child container with `group-focus-within:opacity-100` on the parent container (that has the `group` class) to ensure the interactive elements become visible when they receive keyboard focus.
