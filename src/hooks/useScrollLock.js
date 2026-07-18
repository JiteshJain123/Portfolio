import { useEffect } from "react";

// Ref-counted body scroll lock so multiple overlays can be open/closed
// without one clobbering another's state.
let lockCount = 0;

export const useScrollLock = (active) => {
  useEffect(() => {
    if (!active) return;
    lockCount += 1;
    document.body.style.overflow = "hidden";
    return () => {
      lockCount -= 1;
      if (lockCount <= 0) {
        lockCount = 0;
        document.body.style.overflow = "";
      }
    };
  }, [active]);
};
