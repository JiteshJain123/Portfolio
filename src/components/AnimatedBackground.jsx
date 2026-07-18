import React from "react";

// Fixed, full-page animated backdrop that sits behind all content (-z-10).
// Section backgrounds are translucent so this shows through everywhere.
const AnimatedBackground = () => (
  <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">
    {/* Deep vertical gradient base */}
    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#0b1120] to-slate-950" />

    {/* Drifting aurora blobs */}
    <div className="aurora aurora-1" />
    <div className="aurora aurora-2" />
    <div className="aurora aurora-3" />

    {/* Fine dot grid */}
    <div
      className="absolute inset-0 opacity-[0.12]"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(148,163,184,0.35) 1px, transparent 1px)",
        backgroundSize: "38px 38px",
      }}
    />

    {/* Top and bottom vignette for depth */}
    <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-blue-900/10 to-transparent" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(2,6,23,0.55))]" />
  </div>
);

export default AnimatedBackground;
