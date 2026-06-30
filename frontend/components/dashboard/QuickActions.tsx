const actions = [
  "Generate Campaign",
  "Analyze Website",
  "Review Competitors",
  "Create Social Posts",
  "Generate Weekly Report",
  "Launch New Agent",
];

export default function QuickActions() {
  return (
    <section className="rounded-md border border-hairline bg-surface/40 p-8">

      <p className="eyebrow text-amber">
        Quick Actions
      </p>

      <h2 className="mt-2 font-display text-2xl text-cream">
        Start something new
      </h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {actions.map((action) => (
          <button
            key={action}
            className="rounded-sm border border-hairline bg-base p-6 text-left transition hover:border-amber hover:bg-surface"
          >
            <p className="font-display text-lg text-cream">
              {action}
            </p>

            <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-muted">
              Open
            </p>
          </button>
        ))}

      </div>

    </section>
  );
}