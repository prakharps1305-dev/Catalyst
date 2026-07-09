import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatCard from "@/components/dashboard/StatCard";
import AgentCard, { Agent } from "@/components/dashboard/AgentCard";
import QuickActions from "@/components/dashboard/QuickActions";
import ActivityFeed from "@/components/dashboard/ActivityFeed";

const agents: Agent[] = [
  {
    id: "website",
    name: "Website Agent",
    icon: "website",
    description:
      "Optimizes your website experience and continuously looks for opportunities to improve conversions.",
    status: "Active",
    jobsToday: 18,
    lastSync: "2 mins ago",
    lastAction: "Updated homepage headline",
    defaultActive: true,
  },
  {
    id: "review",
    name: "Review Agent",
    icon: "review",
    description:
      "Monitors customer reviews and drafts professional replies automatically.",
    status: "Active",
    jobsToday: 9,
    lastSync: "8 mins ago",
    lastAction: "Responded to 3 Google reviews",
    defaultActive: true,
  },
  {
    id: "whatsapp",
    name: "WhatsApp Agent",
    icon: "whatsapp",
    description:
      "Handles customer conversations and qualifies leads before handing them to your team.",
    status: "Active",
    jobsToday: 41,
    lastSync: "1 min ago",
    lastAction: "Answered customer enquiry",
    defaultActive: true,
  },
  {
    id: "social",
    name: "Social Agent",
    icon: "social",
    description:
      "Creates and schedules social media content aligned with your brand.",
    status: "Paused",
    jobsToday: 0,
    lastSync: "Yesterday",
    lastAction: "Campaign paused",
    defaultActive: false,
  },
  {
    id: "analytics",
    name: "Analytics Agent",
    icon: "analytics",
    description:
      "Monitors every connected agent and summarizes business performance.",
    status: "Active",
    jobsToday: 5,
    lastSync: "10 mins ago",
    lastAction: "Generated morning report",
    defaultActive: true,
  },
];
const stats = [
  {
    title: "Agents Online",
    value: "5",
    subtitle: "All systems operational",
  },
  {
    title: "Tasks Today",
    value: "42",
    subtitle: "Completed automatically",
  },
  {
    title: "Pending Approvals",
    value: "2",
    subtitle: "Waiting for review",
  },
  {
    title: "Automation Rate",
    value: "91%",
    subtitle: "Business running smoothly",
  },
];

export default function DashboardPage() {
  const activeCount = agents.filter((a) => a.defaultActive).length;

  return (
    <div className="flex min-h-screen bg-base text-cream">
      <Sidebar />

      <main className="flex-1">

    <DashboardHeader />

    <div className="px-6 pt-8 md:px-10">

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
                <StatCard
                    key={stat.title}
                    title={stat.title}
                    value={stat.value}
                    subtitle={stat.subtitle}
                />
            ))}
        </div>


        <div className="mt-8">
            <QuickActions />
        </div>

        <div className="mt-8">
            <ActivityFeed />
        </div>

        <div className="mt-8">
            <div className="mb-6">
                <p className="eyebrow text-amber">
                    Your AI Workforce
                </p>

                <h2 className="mt-2 font-display text-2xl text-cream">
                    Active agents
                </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {agents.map((agent) => (
                    <AgentCard
                        key={agent.id}
                        agent={agent}
                    />
                ))}
            </div>
        </div>

    </div>

</main>
    </div>
  );
}
