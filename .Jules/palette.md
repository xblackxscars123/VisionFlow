## 2024-05-24 - Interactive overlays need keyboard support
**Learning:** When using Tailwind `group-hover:opacity-100` on parent containers to reveal interactive elements (like icon buttons), keyboard users cannot access them unless the parent also responds to focus events.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` to ensure child elements become visible when focused via keyboard navigation.
