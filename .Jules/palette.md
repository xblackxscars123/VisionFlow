## 2024-05-24 - Interactive Elements using Tailwind's Group Modifier
**Learning:** When using Tailwind's hover states (like `group-hover:opacity-100`) on a parent container to reveal interactive child elements (like buttons), keyboard navigation users cannot access these hidden elements because standard focus navigation does not trigger hover states.
**Action:** Always pair `group-hover` with `group-focus-within` on the parent container. This ensures the interactive elements remain visible and accessible via keyboard navigation when focus moves inside the container.
