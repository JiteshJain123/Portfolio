import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

const UIContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useUI = () => {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used within <UIProvider>");
  return ctx;
};

export const UIProvider = ({ children }) => {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  const openPalette = useCallback(() => setPaletteOpen(true), []);
  const closePalette = useCallback(() => setPaletteOpen(false), []);
  const togglePalette = useCallback(() => setPaletteOpen((v) => !v), []);
  const openResume = useCallback(() => setResumeOpen(true), []);
  const closeResume = useCallback(() => setResumeOpen(false), []);

  // Global Cmd/Ctrl+K shortcut.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        togglePalette();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [togglePalette]);

  const value = {
    paletteOpen,
    openPalette,
    closePalette,
    togglePalette,
    resumeOpen,
    openResume,
    closeResume,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
