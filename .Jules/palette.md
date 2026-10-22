## 2026-10-22 - Accessible Hidden Interactive Overlays
**Learning:** This app uses `opacity-0 group-hover:opacity-100` for image overlays with buttons inside, which makes the actions completely invisible to keyboard users who navigate via tab.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on overlay containers to ensure contained interactive elements become visible when focused, and add explicit `focus-visible` styles to the elements themselves.
