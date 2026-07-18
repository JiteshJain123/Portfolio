import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useScrollLock } from "../hooks/useScrollLock";

// Shared centered modal shell: blurred backdrop, escape-to-close,
// click-outside-to-close, scroll lock, and a scrollable content area.
const Modal = ({ open, onClose, children, labelledBy, maxWidth = "max-w-3xl" }) => {
  const panelRef = useRef(null);
  useScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledBy}
      className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-3 sm:p-6"
      onMouseDown={(e) => {
        if (!panelRef.current?.contains(e.target)) onClose();
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md modal-backdrop" />

      {/* Panel */}
      <div
        ref={panelRef}
        className={`relative w-full ${maxWidth} max-h-[92vh] my-auto overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/95 shadow-2xl shadow-black/60 modal-panel`}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3.5 right-3.5 z-20 p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-gray-400 hover:text-white hover:border-slate-500 transition-colors"
        >
          <X size={18} />
        </button>
        <div className="max-h-[92vh] overflow-y-auto modal-scroll">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
