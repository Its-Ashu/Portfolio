/**
 * Ambient aurora / mesh-gradient background.
 * Fixed, GPU-friendly, decorative only.
 */
export function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* deep base */}
      <div className="absolute inset-0 bg-background" />

      {/* grid */}
      <div className="absolute inset-0 bg-grid mask-radial-fade opacity-60" />

      {/* aurora blobs */}
      <div
        className="absolute -top-32 -left-32 h-[60vh] w-[60vh] rounded-full animate-aurora"
        style={{
          background:
            "radial-gradient(circle, oklch(0.74 0.19 290 / 0.35), transparent 60%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute top-1/3 -right-32 h-[55vh] w-[55vh] rounded-full animate-aurora"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.16 215 / 0.28), transparent 60%)",
          filter: "blur(80px)",
          animationDelay: "-7s",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[50vh] w-[50vh] rounded-full animate-aurora"
        style={{
          background:
            "radial-gradient(circle, oklch(0.7 0.2 330 / 0.22), transparent 60%)",
          filter: "blur(80px)",
          animationDelay: "-14s",
        }}
      />

      {/* vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, oklch(0.06 0.02 270 / 0.7) 100%)",
        }}
      />
    </div>
  );
}
