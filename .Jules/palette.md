## 2024-05-18 - Missing keyboard accessibility on overlay buttons
**Learning:** Actions hidden behind opacity-0 group-hover:opacity-100 must also include group-focus-within:opacity-100 so that keyboard users navigating via Tab can actually see the buttons when they receive focus. Additionally, icon-only buttons need aria-label attributes for screen readers.
**Action:** Always pair hover state reveals with focus-within and ensure icon buttons have descriptive aria-label attributes.
