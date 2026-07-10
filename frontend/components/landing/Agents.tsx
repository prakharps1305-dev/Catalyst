import type { ReactNode } from "react";

// Inline SVG icons (line style) so this section has no external icon dependency.
const icons: Record<string, ReactNode> = {
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  star: (
    <path d="M12 3l2.9 5.9 6.1.9-4.5 4.4 1 6.1L12 17.8 6.5 20.3l1-6.1L3 9.8l6.1-.9z" />
  ),
  megaphone: (
    <>
      <path d="M11 5 6 9H3v6h3l5 4V5z" />
      <path d="M16 9a4 4 0 0 1 0 6" />
    </>
  ),
  share: (
    <>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
    </>
  ),
  bars: (
    <>
      <path d="M6 20V12M12 20V6M18 20v-5" />
      <path d="M3 20h18" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
    </>
  ),
  bag: (
    <>
      <path d="M6 8h12l1 12H5L6 8z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </>
  ),
};

const agents = [
  {
    icon: "globe",
    name: "Website Agent",
    role: "Creates & maintains the site",
    points: [
      "Generates full site from 5 inputs",
      "Updates services & pricing",
      "Improves on-page SEO",
      "Mobile-responsive layout",
    ],
  },
  {
    icon: "pin",
    name: "Google Business Agent",
    role: "Maximises local search",
    points: [
      "Optimises Google Business Profile",
      "Suggests photos & descriptions",
      "Improves category tags",
      "Tracks weekly ranking changes",
    ],
  },
  {
    icon: "star",
    name: "Review Agent",
    role: "Builds trust",
    points: [
      "Monitors new Google reviews",
      "Drafts personalised replies",
      "Sends review-request campaigns",
      "Flags negative reviews for the owner",
    ],
  },
  {
    icon: "megaphone",
    name: "WhatsApp Campaign Agent",
    role: "Drives repeat business",
    points: [
      "Generates festival/seasonal offers",
      "Creates re-engagement campaigns",
      "Produces ready-to-send WhatsApp messages",
      "Schedules & tracks performance",
    ],
  },
  {
    icon: "share",
    name: "Social Media Agent",
    role: "Consistent brand presence",
    points: [
      "Instagram & Facebook post drafts",
      "Captions & hashtag sets",
      "Weekly content calendars",
      "Adapts content per platform",
    ],
  },
  {
    icon: "bars",
    name: "Analytics Agent",
    role: "Makes impact visible",
    points: [
      "Tracks visitors & enquiries",
      "Measures WhatsApp click-through",
      "Estimates revenue influenced",
      "Weekly performance reports",
    ],
  },
  {
    icon: "user",
    name: "Account Manager Agent",
    role: "AI chief of staff",
    points: [
      "Summarises performance across agents",
      "Identifies highest-priority actions",
      "Proactively alerts to risks",
      "Answers owner questions",
    ],
  },
  {
    icon: "bag",
    name: "Marketplace Agent",
    role: "Connects businesses with freelancers",
    points: [
      "Matches projects to freelancers",
      "Sends WhatsApp lead notifications",
      "Tracks project status",
      "Handles ratings & reviews",
    ],
  },
];

export default function Agents() {
  return (
    <section id="agents" className="border-t border-hairline px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow text-amber mb-4">The AI Agents</p>

        <h2 className="font-display max-w-2xl text-3xl leading-tight text-cream md:text-[2.5rem]">
          A coordinated system of AI agents.
        </h2>

        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          Seven specialised growth agents plus a marketplace agent, sharing one
          memory layer.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className="glass lift flex flex-col rounded-md p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-hairline bg-base text-amber">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {icons[agent.icon]}
                </svg>
              </div>

              <h3 className="mt-5 font-display text-lg text-cream">
                {agent.name}
              </h3>

              <p className="mt-1 text-sm text-muted">{agent.role}</p>

              <ul className="mt-5 space-y-2.5">
                {agent.points.map((point) => (
                  <li
                    key={point}
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
                        stroke="#6FCF97"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
