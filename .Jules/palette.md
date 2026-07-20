## 2024-05-18 - Improve image overlay button accessibility
**Learning:** Interactive elements hidden behind hover states (like image download overlays) become completely inaccessible to keyboard users unless explicitly handled. Relying only on `group-hover` traps focus visually behind a hidden state.
**Action:** When using `group-hover:opacity-100` to reveal interactive elements on hover, always pair it with `group-focus-within:opacity-100` on the parent container. Ensure icon-only buttons receive an `aria-label` and visible focus states (e.g., `focus-visible:ring-2`).
