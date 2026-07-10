import type { GeneratedWebsite } from "@/types/website";

type Business = {
  name?: string;
  phone?: string | null;
  email?: string | null;
  address?: string | null;
  city?: string | null;
};

export type PublishedContent = GeneratedWebsite & { _business?: Business };

function isHex(v: string) {
  return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(v.trim());
}

export default function PublishedSite({
  content,
}: {
  content: PublishedContent;
}) {
  const accent = isHex(content.primary_color || "")
    ? content.primary_color.trim()
    : "#16a34a";
  const biz = content._business ?? {};
  const name = biz.name || content.hero_title;

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-neutral-200/70 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight">{name}</span>
          <a
            href="#contact"
            className="rounded-full px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: accent }}
          >
            {content.cta || "Get in touch"}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
          {content.hero_title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-neutral-600">
          {content.hero_subtitle}
        </p>
        <a
          href="#contact"
          className="mt-9 inline-block rounded-full px-7 py-3.5 font-medium text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: accent }}
        >
          {content.cta || "Get in touch"}
        </a>
      </section>

      {/* About */}
      {content.about && (
        <section className="border-t border-neutral-100 bg-neutral-50/60">
          <div className="mx-auto max-w-3xl px-6 py-16">
            <p className="text-lg leading-relaxed text-neutral-700">
              {content.about}
            </p>
          </div>
        </section>
      )}

      {/* Services */}
      {content.services?.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight">What we offer</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.services.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border border-neutral-200 p-6 transition-shadow hover:shadow-md"
              >
                <div
                  className="mb-4 h-1.5 w-10 rounded-full"
                  style={{ backgroundColor: accent }}
                />
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-neutral-600">{s.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Why choose us */}
      {content.why_choose_us?.length > 0 && (
        <section className="border-t border-neutral-100 bg-neutral-50/60">
          <div className="mx-auto max-w-4xl px-6 py-20">
            <h2 className="text-3xl font-bold tracking-tight">Why choose us</h2>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {content.why_choose_us.map((w, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white"
                    style={{ backgroundColor: accent }}
                  >
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-neutral-700">{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {content.testimonials?.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight">
            What people say
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {content.testimonials.map((t, i) => (
              <figure
                key={i}
                className="rounded-2xl border border-neutral-200 p-6"
              >
                <blockquote className="text-neutral-700">
                  “{t.review}”
                </blockquote>
                <figcaption className="mt-4 text-sm font-medium text-neutral-900">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      {content.faq?.length > 0 && (
        <section className="border-t border-neutral-100 bg-neutral-50/60">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <h2 className="text-3xl font-bold tracking-tight">
              Frequently asked
            </h2>
            <div className="mt-8 divide-y divide-neutral-200 border-t border-neutral-200">
              {content.faq.map((f, i) => (
                <details key={i} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    {f.question}
                    <span className="ml-4 text-neutral-400 transition-transform group-open:rotate-180">
                      ▾
                    </span>
                  </summary>
                  <p className="mt-3 text-neutral-600">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight">Get in touch</h2>
        <div className="mt-8 grid gap-4 text-neutral-700 sm:grid-cols-3">
          {biz.phone && (
            <div>
              <p className="text-xs uppercase tracking-wide text-neutral-400">Phone</p>
              <p className="mt-1">{biz.phone}</p>
            </div>
          )}
          {biz.email && (
            <div>
              <p className="text-xs uppercase tracking-wide text-neutral-400">Email</p>
              <p className="mt-1 break-all">{biz.email}</p>
            </div>
          )}
          {(biz.address || biz.city) && (
            <div>
              <p className="text-xs uppercase tracking-wide text-neutral-400">Visit</p>
              <p className="mt-1">
                {[biz.address, biz.city].filter(Boolean).join(", ")}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-neutral-500 sm:flex-row">
          <span>
            © {new Date().getFullYear()} {name}
          </span>
          <a
            href="/"
            className="transition-colors hover:text-neutral-800"
          >
            Made with Catalyst
          </a>
        </div>
      </footer>
    </div>
  );
}
