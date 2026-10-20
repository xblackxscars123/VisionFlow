## 2025-02-26 - Hidden Interactive Elements Accessibility
**Learning:** Using Tailwind's hover states (e.g., `group-hover:opacity-100`) to reveal hidden interactive elements must always be paired with `group-focus-within:opacity-100` on the parent container to ensure keyboard accessibility.
**Action:** Always add `group-focus-within` when using `group-hover` for interactive elements.
