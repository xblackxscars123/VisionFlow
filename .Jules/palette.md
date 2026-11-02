## 2024-05-18 - Keyboard Focus on Hover Overlays
**Learning:** Image overlays that rely strictly on CSS hover states (e.g., group-hover:opacity-100) hide interactive elements from keyboard-only users, making the app inaccessible to tab navigation.
**Action:** Always pair hover-triggered visibility with focus-within triggers (e.g., focus-within:opacity-100) on the parent container so elements become visible when keyboard focus enters them.
