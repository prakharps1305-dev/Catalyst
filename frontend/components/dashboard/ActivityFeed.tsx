type Activity = {
  id: number;
  time: string;
  agent: string;
  message: string;
};

const activities: Activity[] = [
  {
    id: 1,
    time: "10 mins ago",
    agent: "Website Agent",
    message: "Published homepage headline experiment.",
  },
  {
    id: 2,
    time: "32 mins ago",
    agent: "Review Agent",
    message: "Replied to 12 Google reviews.",
  },
  {
    id: 3,
    time: "1 hour ago",
    agent: "WhatsApp Agent",
    message: "Resolved 26 customer conversations.",
  },
  {
    id: 4,
    time: "3 hours ago",
    agent: "Analytics Agent",
    message: "Generated today's executive summary.",
  },
];

export default function ActivityFeed() {
  return (
    <section className="rounded-md border border-hairline bg-surface/40 p-8">

      <div className="flex items-center justify-between">

        <div>

          <p className="eyebrow text-amber">
            Activity Feed
          </p>

          <h2 className="mt-2 font-display text-2xl text-cream">
            Recent agent activity
          </h2>

        </div>

      </div>

      <div className="mt-8 space-y-5">

        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start justify-between border-b border-hairline pb-5"
          >
            <div>

              <p className="text-cream">

                <span className="font-semibold text-sage">
                  {activity.agent}
                </span>

                {" "}
                {activity.message}

              </p>

              <p className="mt-2 text-sm text-muted">
                {activity.time}
              </p>

            </div>

            <div className="h-2 w-2 rounded-full bg-sage" />

          </div>
        ))}

      </div>

    </section>
  );
}