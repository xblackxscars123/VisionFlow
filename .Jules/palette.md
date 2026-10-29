## 2024-05-15 - Ensure Keyboard Accessibility for Hover-Revealed Elements
**Learning:** Interactive elements hidden behind a hover state (like group-hover:opacity-100) become invisible focus traps for keyboard users because they can receive focus but remain visually hidden.
**Action:** Always pair group-hover:opacity-100 with group-focus-within:opacity-100 on the parent container, and ensure the interactive element has an aria-label and visible focus indicators (e.g., focus-visible:ring-2).
