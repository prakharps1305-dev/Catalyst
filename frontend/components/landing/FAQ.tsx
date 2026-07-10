const faqs = [
  {
    q: "How does the AI actually build my website?",
    a: "You answer five quick questions — business name, type, location, services, and phone. The Website Agent turns those into a full site with hero copy, services, FAQs, testimonials, SEO metadata, and branding, generated in about two minutes.",
  },
  {
    q: "What do all the agents actually do?",
    a: "Each agent owns one growth job: the Website Agent builds your site, the Google Business and Review agents handle local search and reputation, the WhatsApp and Social agents drive repeat business, the Analytics agent measures impact, and the Account Manager ties it all together and tells you what to do next.",
  },
  {
    q: "Is it really autonomous, or do I have to approve things?",
    a: "You stay in control. Agents draft and recommend — replies, campaigns, posts — and you approve before anything goes live. As you build trust, you can hand more over to run on autopilot.",
  },
  {
    q: "How do WhatsApp and Google integrations work?",
    a: "You connect your Google Business Profile and WhatsApp number once. Agents then read reviews, publish updates, and prepare campaign messages for you, with every action logged on your dashboard.",
  },
  {
    q: "What does pricing and cancellation look like?",
    a: "Plans start at ₹1,499/month with a one-time ₹999 setup. There's no lock-in — cancel anytime and keep everything that's been created for you.",
  },
  {
    q: "Do I own my site and content?",
    a: "Yes. Your site, content, and customer data are yours. You can export them or take them with you whenever you like.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="border-t border-hairline px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow text-amber mb-4">FAQ</p>

        <h2 className="font-display text-3xl leading-tight text-cream md:text-[2.5rem]">
          Common questions.
        </h2>

        <div className="mt-12 divide-y divide-hairline border-t border-hairline">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-cream marker:hidden">
                <span className="font-display text-lg">{faq.q}</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="shrink-0 text-muted transition-transform duration-200 group-open:rotate-180"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </summary>

              <p className="mt-3 max-w-2xl leading-relaxed text-muted">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
