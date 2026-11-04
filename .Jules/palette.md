## 2024-03-20 - Accessible Hover Actions
**Learning:** Actions hidden behind group-hover (like image overlays) become completely invisible to keyboard users who tab through the interface.
**Action:** Always pair group-hover:opacity-100 with focus-within:opacity-100 (or group-focus-within) and ensure nested buttons have clear focus-visible ring styles.
