const columns = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Changelog", "Status"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog"],
  },
  {
    title: "Resources",
    links: ["Docs", "API reference", "Community"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-hairline px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9.5" stroke="#FF8A3D" strokeWidth="1.4" />
                <path d="M12 6.5V12L16 14.5" stroke="#FF8A3D" strokeWidth="1.4" strokeLinecap="round" />
                <circle cx="12" cy="12" r="1.4" fill="#FF8A3D" />
              </svg>
              <span className="font-mono text-sm text-cream">
                Catalyst<span className="text-amber">.AI</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Your AI co-pilot for growth — diagnose, automate, and compound,
              one flight plan at a time.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-cream/80 transition-colors hover:text-amber">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-8 md:flex-row">
          <p className="font-mono text-[0.65rem] text-muted">
            © {new Date().getFullYear()} Catalyst. All systems nominal.
          </p>
          <p className="font-mono text-[0.65rem] text-muted">
            Built for teams who ship, not just plan.
          </p>
        </div>
      </div>
    </footer>
  );
}
