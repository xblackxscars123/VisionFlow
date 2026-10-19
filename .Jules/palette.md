## 2023-11-02 - Hidden Controls Need Focus Within
**Learning:** Tailwind's `group-hover:opacity-100` makes interactive elements inaccessible to keyboard users because they remain invisible on focus.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the parent container to ensure hidden controls become visible when child elements receive keyboard focus.