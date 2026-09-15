## 2024-05-24 - Reveal Interactive Elements for Keyboard Accessibility
**Learning:** Hidden interactive elements within hover states (like `group-hover:opacity-100`) become invisible traps for keyboard users unless explicitly handled for focus states.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the container, and ensure the interactive element has an explicit `focus-visible` outline and `aria-label` when it's an icon-only button.
