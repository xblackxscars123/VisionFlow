## 2024-05-20 - Keyboard Accessibility for Hover-Revealed Elements
**Learning:** Hidden interactive elements revealed on hover (e.g., using Tailwind's `group-hover:opacity-100`) are inaccessible to keyboard users because they cannot hover to make them visible and focusable elements may remain visually hidden when focused.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container (and ensure focusable elements have a clear focus state) to ensure keyboard accessibility.
