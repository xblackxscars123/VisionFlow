## 2024-08-24 - [Keyboard Access to Hover States]
**Learning:** Interactive elements nested inside hover-based overlays (like image action buttons) require specific container-level focus states to remain accessible for keyboard navigation.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on parent containers when revealing interactive elements.
