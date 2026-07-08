## 2025-07-08 - Keyboard accessibility for hover-revealed elements

**Learning:** When using Tailwind's `group-hover:opacity-100` to reveal interactive elements on mouseover, those elements remain hidden for keyboard-only users who tab to them, rendering them effectively inaccessible.

**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container. This ensures that when a child interactive element (like a button) receives focus via the keyboard, the parent container reveals its contents, keeping the interface accessible.
