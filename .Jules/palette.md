## 2024-05-18 - Missing Focus States on Overlay Buttons
**Learning:** Icon-only buttons in absolute positioned image overlays are often hidden to screen readers and keyboard users if they only use `opacity-0 group-hover:opacity-100`. In `src/App.tsx`, the final optimized image download button was completely inaccessible via keyboard.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent overlay container, and ensure the interactive element has `focus-visible` ring styling so keyboard users can navigate to and clearly see the action.

## 2024-05-18 - Form Headings Should Be Labels
**Learning:** Visual headings above textareas (like "Generate from Prompt") are often implemented as `<h2>` tags, missing the opportunity to expand the click target area and link the label semantically for screen readers.
**Action:** Convert headings above form inputs to `<label htmlFor="input-id">` and give the input a matching `id`. Add `cursor-pointer w-fit` so users can easily click the text to focus the field.
