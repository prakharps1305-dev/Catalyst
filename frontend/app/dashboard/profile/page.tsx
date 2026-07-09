export default function BusinessProfilePage() {
  return (
    <main className="flex-1 px-8 py-10">

      <div className="max-w-5xl">

        <p className="eyebrow text-amber mb-3">
          Business Profile
        </p>

        <h1 className="font-display text-4xl text-cream">
          Your business.
        </h1>

        <p className="mt-3 max-w-xl text-muted">
          Everything Catalyst knows about your business. These details are used
          by every AI agent to understand your company and make better decisions.
        </p>

        <div className="mt-10 grid gap-6">

          {/* Business Information */}

          <section className="rounded-md border border-hairline bg-surface/40 p-7">

            <div className="flex items-center justify-between">

              <div>

                <h2 className="font-display text-2xl text-cream">
                  Business Information
                </h2>

                <p className="mt-1 text-sm text-muted">
                  Basic information about your company.
                </p>

              </div>

              <button className="rounded-sm border border-amber px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-amber hover:bg-amber hover:text-base transition-colors">
                Edit
              </button>

            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              <Info
                label="Business Name"
                value="Acme Marketing"
              />

              <Info
                label="Category"
                value="Marketing Agency"
              />

              <Info
                label="City"
                value="Mumbai"
              />

              <Info
                label="Email"
                value="hello@acme.com"
              />

              <Info
                label="Phone"
                value="+91 9876543210"
              />

              <Info
                label="Website / Social"
                value="https://linkedin.com/company/acme"
              />

            </div>

          </section>

          {/* Address */}

          <section className="rounded-md border border-hairline bg-surface/40 p-7">

            <h2 className="font-display text-2xl text-cream">
              Address
            </h2>

            <p className="mt-5 leading-relaxed text-muted">
              2nd Floor, Business Plaza,
              <br />
              Andheri East,
              <br />
              Mumbai, Maharashtra
            </p>

          </section>

          {/* Description */}

          <section className="rounded-md border border-hairline bg-surface/40 p-7">

            <h2 className="font-display text-2xl text-cream">
              About your business
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-muted">

              We help startups and SMEs acquire customers through
              performance marketing, SEO, paid ads and brand strategy.

            </p>

          </section>

          {/* AI Context */}

          <section className="rounded-md border border-hairline bg-surface/40 p-7">

            <h2 className="font-display text-2xl text-cream">
              AI Context
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              <Info
                label="Target Audience"
                value="Startup founders & SMEs"
              />

              <Info
                label="Brand Tone"
                value="Professional • Friendly • Helpful"
              />

            </div>

          </section>

        </div>

      </div>

    </main>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>

      <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">
        {label}
      </p>

      <p className="mt-2 text-cream">
        {value}
      </p>

    </div>
  );
}