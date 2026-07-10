// Fixed, non-interactive background layer: soft drifting light so the whole
// page feels like it has depth without any heavy 3D library.
export default function Ambient() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* base wash */}
      <div className="absolute inset-0 bg-base" />

      {/* green glow, top-left */}
      <div
        className="drift absolute -left-[10%] -top-[15%] h-[55vw] w-[55vw] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(52,211,153,0.20), transparent 65%)",
        }}
      />

      {/* sage glow, right */}
      <div
        className="drift-alt absolute -right-[12%] top-[25%] h-[45vw] w-[45vw] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(116,214,160,0.14), transparent 65%)",
        }}
      />

      {/* deep green glow, bottom */}
      <div
        className="drift absolute bottom-[-20%] left-[25%] h-[50vw] w-[50vw] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(16,185,129,0.14), transparent 65%)",
        }}
      />

      {/* subtle top vignette to seat the content */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, transparent 40%, rgba(0,0,0,0.35) 100%)",
        }}
      />
    </div>
  );
}
