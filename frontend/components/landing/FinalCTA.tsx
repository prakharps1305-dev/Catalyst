import Link from "next/link";

export default function FinalCTA() {
  return (
    <section id="get-started" className="border-t border-hairline px-6 py-28">
      <div className="glass glow-amber mx-auto max-w-3xl rounded-2xl px-8 py-16 text-center">
        <h2 className="font-display text-4xl leading-tight text-cream md:text-5xl">
          Give your business an AI growth team today.
        </h2>

        <p className="mt-5 leading-relaxed text-muted">
          Five questions. Two minutes. A full growth engine, running for you.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/onboarding"
            className="rounded-sm bg-amber px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-base shadow-lg transition-transform hover:-translate-y-0.5 hover:brightness-110"
          >
            Start free →
          </Link>

          <Link
            href="/dashboard"
            className="rounded-sm border border-hairline px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-cream transition hover:border-muted"
          >
            See the dashboard
          </Link>
        </div>
      </div>
    </section>
  );
}
