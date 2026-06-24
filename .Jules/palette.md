## 2025-03-05 - Hover-Revealed Interactive Elements Accessibility

**Learning:** When using Tailwind's hover states (like `group-hover:opacity-100`) to reveal interactive elements (e.g., a download button on an image overlay), those elements become inaccessible to keyboard users because they cannot hover to reveal them, and often cannot see where the focus currently is.

**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container. This ensures that when a keyboard user tabs into the hidden element, the container becomes visible. Additionally, ensure the element itself has clear visible focus styles (e.g., `focus-visible:ring-2 focus-visible:outline-none`) and proper ARIA labels if it's an icon-only button.