"use client";

import Link from "next/link";

export type Agent = {
  id: string;
  name: string;
  icon: "website" | "review" | "whatsapp" | "social" | "analytics";
  description: string;
  status: "Active" | "Paused";
  jobsToday: number;
  lastSync: string;
  lastAction: string;
  defaultActive: boolean;
};

function StatusBadge({ active }: { active: boolean }) {
  return (
    <div
      className={`flex items-center gap-2 rounded-full px-3 py-1 text-xs font-mono uppercase tracking-wider ${
        active
          ? "bg-sage/15 text-sage"
          : "bg-amber/15 text-amber"
      }`}
    >
      <span
        className={`h-2 w-2 rounded-full ${
          active ? "bg-sage animate-pulse" : "bg-amber"
        }`}
      />
      {active ? "Active" : "Paused"}
    </div>
  );
}

export default function AgentCard({ agent }: { agent: Agent }) {
  return (
    <div className="group rounded-lg border border-hairline bg-surface/40 p-6 transition-all hover:-translate-y-1 hover:border-amber/50 hover:bg-surface">

      <div className="flex items-start justify-between">

        <div>
          <h3 className="font-display text-xl text-cream">
            {agent.name}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-muted">
            {agent.description}
          </p>
        </div>

        <StatusBadge active={agent.status === "Active"} />

      </div>

      <div className="my-6 border-t border-hairline" />

      <div className="grid grid-cols-2 gap-6">

        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
            Jobs Today
          </p>

          <p className="mt-1 text-3xl font-display text-cream">
            {agent.jobsToday}
          </p>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
            Last Sync
          </p>

          <p className="mt-1 text-lg text-cream">
            {agent.lastSync}
          </p>
        </div>

      </div>

      <div className="mt-6 rounded-md bg-base/60 p-4">

        <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
          Last Activity
        </p>

        <p className="mt-2 text-sm text-cream">
          {agent.lastAction}
        </p>

      </div>

      <Link
        href={`/dashboard/agents/${agent.id}`}
        className="mt-6 flex items-center justify-between rounded-md border border-hairline px-4 py-3 transition hover:border-amber hover:bg-amber/10"
      >
        <span className="font-mono text-xs uppercase tracking-widest">
          Open Agent
        </span>

        <span className="text-lg">→</span>
      </Link>

    </div>
  );
}