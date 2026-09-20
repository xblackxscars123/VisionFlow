## 2025-03-03 - Hidden Interactive Elements Keyboard Accessibility
**Learning:** Tailwind's `group-hover:opacity-100` pattern for revealing action buttons (like image downloads) makes them completely inaccessible to keyboard users unless paired with `group-focus-within:opacity-100`. The buttons are reachable via Tab but remain visually invisible.
**Action:** Always pair `group-hover:opacity-*` with `group-focus-within:opacity-*` on parent containers of interactive overlays, and ensure the revealed buttons have visible focus rings (`focus-visible:ring-2`) and ARIA labels if they are icon-only.
