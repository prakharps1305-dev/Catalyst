const tiers = [
  {
    name: "Starter",
    price: "₹1,999",
    cadence: "/month",
    desc: "Perfect for founders and small businesses getting started with AI-powered business insights.",
    features: [
      "1 Business Workspace",
      "Business Health Dashboard",
      "AI Opportunity Reports",
      "Weekly Growth Insights",
      "Email Support",
    ],
    cta: "Start Free Trial",
    featured: false,
  },
  {
    name: "Professional",
    price: "₹7,999",
    cadence: "/month",
    desc: "Built for growing businesses ready to automate operations and make smarter decisions.",
    features: [
      "Up to 5 Business Workspaces",
      "Unlimited AI Recommendations",
      "Real-Time Business Dashboard",
      "Workflow Automations",
      "Priority Support",
      "Monthly Strategy Review",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    desc: "For enterprises requiring advanced integrations, security, and dedicated support.",
    features: [
      "Unlimited Workspaces",
      "Custom AI Workflows",
      "Dedicated Success Manager",
      "API Access",
      "Advanced Security & SSO",
      "Custom Integrations",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-hairline px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow text-amber mb-4">Pricing</p>

        <h2 className="font-display max-w-2xl text-3xl leading-tight text-cream md:text-[2.5rem]">
          Flexible pricing for every stage of your business.
        </h2>

        <p className="mt-4 max-w-2xl text-muted leading-relaxed">
          Start with a free trial and scale as your business grows. Every plan
          includes Catalyst's AI-powered business intelligence platform.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`glass lift relative flex flex-col rounded-md p-7 ${
                t.featured ? "glow-amber" : ""
              }`}
            >
              

              <h3 className="font-display text-xl text-cream">
                {t.name}
              </h3>

              <p className="mt-1 text-sm text-muted">
                {t.desc}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-3xl text-cream">
                  {t.price}
                </span>

                {t.cadence && (
                  <span className="font-mono text-xs text-muted">
                    {t.cadence}
                  </span>
                )}
              </div>

              <ul className="mt-7 flex-1 space-y-3">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-muted"
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="mt-0.5 shrink-0"
                    >
                      <path
                        d="M3 8.5L6.2 11.5L13 4.5"
                        stroke={t.featured ? "#34d399" : "#6FCF97"}
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-8 rounded-sm px-5 py-3 text-center font-mono text-xs uppercase tracking-[0.14em] transition-transform hover:-translate-y-0.5 ${
                  t.featured
                    ? "bg-amber border border-amber text-base shadow-lg hover:brightness-110"
                    : "border border-hairline text-cream hover:border-muted"
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}