type Briefing = {
  greeting: string;
  headline: string;
  impact: string;
  recommendation: string;
  confidence: number;
};

const briefing: Briefing = {
  greeting: "Good evening.",
  headline: "Your website checkout drop-off increased by 11% yesterday.",
  impact: "Potential revenue impact: ₹28,000/month",
  recommendation:
    "Deploy the simplified checkout experiment before peak traffic begins.",
  confidence: 94,
};

export default function ExecutiveBriefing() {
  return (
    <section className="rounded-md border border-hairline bg-surface/40 p-8">
      <p className="eyebrow text-sage mb-4">AI Executive Briefing</p>

      <h2 className="font-display text-3xl text-cream">
        {briefing.greeting}
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-cream">
        {briefing.headline}
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">

        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted">
            Revenue Impact
          </p>

          <h3 className="mt-2 font-display text-2xl text-amber">
            {briefing.impact}
          </h3>
        </div>

        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted">
            Recommendation
          </p>

          <p className="mt-2 text-muted">
            {briefing.recommendation}
          </p>
        </div>

        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted">
            Confidence
          </p>

          <h3 className="mt-2 font-display text-2xl text-sage">
            {briefing.confidence}%
          </h3>
        </div>

      </div>

      <div className="mt-8 flex gap-4">

        <button className="rounded-sm bg-amber px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-base hover:-translate-y-0.5 transition">
          Approve Recommendation
        </button>

        <button className="rounded-sm border border-hairline px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-cream hover:border-muted">
          View Details
        </button>

      </div>
    </section>
  );
}