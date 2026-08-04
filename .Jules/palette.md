## 2024-05-15 - Focus Within on Hover Overlays
**Learning:** Using `group-hover` to show interactive elements (like icon buttons inside image containers) hides them from keyboard-only users navigating via Tab.
**Action:** Always pair `group-hover` with `group-focus-within` on the parent container so the overlay appears when its child elements receive keyboard focus.
