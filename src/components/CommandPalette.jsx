import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Search,
  Home,
  User,
  Briefcase,
  Wrench,
  FolderGit2,
  Trophy,
  PenLine,
  Mail,
  FileText,
  Download,
  Github,
  Linkedin,
  CornerDownLeft,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { useUI } from "../context/UIContext";
import { useScrollLock } from "../hooks/useScrollLock";

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const CommandPalette = () => {
  const { paletteOpen, closePalette, openResume } = useUI();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  useScrollLock(paletteOpen);

  const commands = useMemo(
    () => [
      { group: "Navigate", icon: Home, label: "Home", hint: "Top of page", run: () => scrollTo("home") },
      { group: "Navigate", icon: User, label: "About", hint: "Who I am", run: () => scrollTo("about") },
      { group: "Navigate", icon: Briefcase, label: "Experience", hint: "Internship & roles", run: () => scrollTo("experience") },
      { group: "Navigate", icon: Wrench, label: "Skills", hint: "Tech stack", run: () => scrollTo("skills") },
      { group: "Navigate", icon: FolderGit2, label: "Projects", hint: "Case studies", run: () => scrollTo("projects") },
      { group: "Navigate", icon: Trophy, label: "Achievements", hint: "Awards", run: () => scrollTo("achievements") },
      { group: "Navigate", icon: PenLine, label: "Writing", hint: "Blog posts", run: () => scrollTo("writing") },
      { group: "Navigate", icon: Mail, label: "Contact", hint: "Get in touch", run: () => scrollTo("contact") },
      { group: "Actions", icon: FileText, label: "View Résumé", hint: "Open inline", run: () => openResume() },
      {
        group: "Actions",
        icon: Download,
        label: "Download Résumé",
        hint: "PDF",
        run: () => {
          const a = document.createElement("a");
          a.href = "/Jitesh_Jain_Resume.pdf";
          a.download = "Jitesh_Jain_Resume.pdf";
          a.click();
        },
      },
      { group: "Links", icon: Github, label: "GitHub", hint: "@JiteshJain123", run: () => window.open("https://github.com/JiteshJain123", "_blank") },
      { group: "Links", icon: Linkedin, label: "LinkedIn", hint: "jitesh-jain22", run: () => window.open("https://linkedin.com/in/jitesh-jain22", "_blank") },
      { group: "Links", icon: Mail, label: "Email Me", hint: "jainjitesh2004@gmail.com", run: () => window.open("mailto:jainjitesh2004@gmail.com") },
    ],
    [openResume]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (c) => c.label.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q) || c.group.toLowerCase().includes(q)
    );
  }, [query, commands]);

  // Reset transient state whenever the palette opens.
  useEffect(() => {
    if (paletteOpen) {
      setQuery("");
      setActive(0);
      // Focus after paint so the caret lands reliably.
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [paletteOpen]);

  useEffect(() => setActive(0), [query]);

  const runCommand = (cmd) => {
    if (!cmd) return;
    closePalette();
    // Let the overlay unmount before scrolling/navigating.
    setTimeout(() => cmd.run(), 60);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      runCommand(filtered[active]);
    } else if (e.key === "Escape") {
      e.preventDefault();
      closePalette();
    }
  };

  // Keep the active row scrolled into view.
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-idx="${active}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [active]);

  if (!paletteOpen) return null;

  let lastGroup = null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      className="fixed inset-0 z-[110] flex items-start justify-center pt-[12vh] px-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closePalette();
      }}
    >
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md modal-backdrop" />

      <div className="relative w-full max-w-xl rounded-2xl border border-slate-700/80 bg-slate-900/95 shadow-2xl shadow-black/60 overflow-hidden palette-panel">
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 border-b border-slate-700/70">
          <Search size={18} className="text-gray-500 flex-shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Jump to a section or run a command…"
            className="w-full bg-transparent py-4 text-sm text-white placeholder:text-gray-600 focus:outline-none"
          />
          <kbd className="hidden sm:inline text-[10px] font-semibold text-gray-500 border border-slate-700 rounded px-1.5 py-0.5">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div ref={listRef} className="max-h-[52vh] overflow-y-auto py-2 modal-scroll">
          {filtered.length === 0 && (
            <div className="px-4 py-8 text-center text-sm text-gray-500">No matches for “{query}”.</div>
          )}
          {filtered.map((cmd, idx) => {
            const showGroup = cmd.group !== lastGroup;
            lastGroup = cmd.group;
            const Icon = cmd.icon;
            return (
              <React.Fragment key={cmd.label}>
                {showGroup && (
                  <div className="px-4 pt-3 pb-1 text-[10px] font-bold uppercase tracking-widest text-gray-600">
                    {cmd.group}
                  </div>
                )}
                <button
                  data-idx={idx}
                  onMouseEnter={() => setActive(idx)}
                  onClick={() => runCommand(cmd)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                    active === idx ? "bg-blue-500/15" : "hover:bg-slate-800/60"
                  }`}
                >
                  <span
                    className={`p-1.5 rounded-lg border transition-colors ${
                      active === idx
                        ? "bg-blue-500/20 border-blue-500/40 text-blue-300"
                        : "bg-slate-800 border-slate-700 text-gray-400"
                    }`}
                  >
                    <Icon size={15} />
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm font-medium text-white">{cmd.label}</span>
                    <span className="block text-[11px] text-gray-500">{cmd.hint}</span>
                  </span>
                  {active === idx && (
                    <CornerDownLeft size={14} className="text-gray-500 flex-shrink-0" />
                  )}
                </button>
              </React.Fragment>
            );
          })}
        </div>

        {/* Footer legend */}
        <div className="flex items-center gap-4 px-4 py-2.5 border-t border-slate-700/70 text-[11px] text-gray-500">
          <span className="flex items-center gap-1"><ArrowUp size={11} /><ArrowDown size={11} /> navigate</span>
          <span className="flex items-center gap-1"><CornerDownLeft size={11} /> select</span>
          <span className="ml-auto hidden sm:inline">Tip: press <kbd className="text-gray-400 border border-slate-700 rounded px-1">Ctrl</kbd>+<kbd className="text-gray-400 border border-slate-700 rounded px-1">K</kbd> anywhere</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
