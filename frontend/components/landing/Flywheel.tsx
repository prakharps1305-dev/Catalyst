const steps = [
  "Business joins & AI builds the site",
  "AI improves visibility & rankings",
  "More leads & enquiries flow in",
  "Owner sees real ROI",
  "Owner stays subscribed",
  "Owner shares a testimonial",
  "Testimonials attract new businesses",
  "Platform data improves the AI",
];

export default function Flywheel() {
  return (
    <section id="flywheel" className="border-t border-hairline px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow text-amber mb-4">Growth Flywheel</p>

        <h2 className="font-display max-w-2xl text-3xl leading-tight text-cream md:text-[2.5rem]">
          Every customer makes the next one easier.
        </h2>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step}
              className="glass lift flex items-start gap-4 rounded-md p-6"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-hairline bg-base font-mono text-xs text-amber">
                {i + 1}
              </span>
              <p className="leading-relaxed text-cream">{step}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0">
            <path
              d="M4 9a8 8 0 0 1 14-3m2-3v6h-6M20 15a8 8 0 0 1-14 3m-2 3v-6h6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Loops back to the start — every cycle strengthens the platform.
        </p>
      </div>
    </section>
  );
}
