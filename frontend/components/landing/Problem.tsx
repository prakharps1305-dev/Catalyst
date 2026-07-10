const painPoints = [
  "Local agencies cost ₹10,000–50,000/month — out of reach for most owners.",
  "Businesses stay invisible on Google Maps and local search.",
  "Reviews sit unanswered for weeks, quietly costing trust.",
  "No way to measure what marketing actually drives customers.",
];

export default function Problem() {
  return (
    <section id="problem" className="border-t border-hairline px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow text-amber mb-4">The Problem</p>

        <h2 className="font-display max-w-2xl text-3xl leading-tight text-cream md:text-[2.5rem]">
          Local businesses are losing the internet.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {painPoints.map((point) => (
            <div
              key={point}
              className="glass lift flex items-start gap-4 rounded-md p-7"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
              <p className="leading-relaxed text-muted">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
