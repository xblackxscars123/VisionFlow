## 2026-10-15 - Reveal on Hover Requires Reveal on Focus
**Learning:** Interactive elements (like download buttons) that are hidden by default and revealed on hover (`group-hover:opacity-100`) are completely inaccessible to keyboard-only users who cannot trigger the hover state.
**Action:** When using Tailwind's hover states (e.g., `group-hover:opacity-100`) to reveal hidden interactive elements, always pair it with `group-focus-within:opacity-100` on the parent container to ensure keyboard accessibility.
