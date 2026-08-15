## 2026-08-15 - Interactive Elements inside Hover Overlay
**Learning:** When using Tailwind's `group-hover:opacity-100` to reveal interactive elements (like the download button on the final generated image), keyboard navigation users are locked out because the element remains invisible when focused.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container, and add `focus-visible` utility classes to the button itself, ensuring the overlay appears and elements are accessible when navigating via keyboard.
