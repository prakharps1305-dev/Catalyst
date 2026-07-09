"use client";
import {
  Badge,
  Button,
  Card,
  Container,
  Heading,
  Section,
} from "@/components/common";
import Link from "next/link";

import Agent from "@/components/dashboard/AgentCard";

import {
  Globe,
  MessageSquare,
  Megaphone,
  BarChart3,
  Bot,
} from "lucide-react";

export default function HeroSection() {
  return (
    <Section className="relative overflow-hidden bg-[var(--color-base)] text-[var(--color-cream)]">
      <Container>
        <div className="grid grid-cols-2 items-center gap-16">

            
          {/* LEFT SIDE */}
          <div>
            <Badge>Catalyst</Badge>

            <div className="mt-6">
              <Heading
                title="Where insights become action."
                subtitle="The AI operating system that transforms business data into actionable insights, intelligent recommendations, and measurable growth."
              />
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/login">
              <Button>
                 Start Free Trial
              </Button>
              </Link>
              <Button variant="secondary">Watch Demo</Button>
              
            </div>

          
          </div>

          {/* RIGHT SIDE DASHBOARD */}
          <div>
            <Card className="rounded-3xl border border-zinc-800 bg-[#132423] p-6 shadow-2xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">
                    ABC Salon Dashboard
                  </h3>
                  <p className="text-sm text-zinc-400">
                    AI Agents Active
                  </p>
                </div>

                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm text-emerald-400">
                  Live
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <AgentCard
                  icon={<Globe size={20} />}
                  title="Website Agent"
                  status="Generated"
                />

                <AgentCard
                  icon={<MessageSquare size={20} />}
                  title="Review Agent"
                  status="Running"
                />

                <AgentCard
                  icon={<Megaphone size={20} />}
                  title="WhatsApp Agent"
                  status="Scheduled"
                />

                <AgentCard
                  icon={<BarChart3 size={20} />}
                  title="Analytics Agent"
                  status="Updated"
                />
              </div>

              <div className="mt-6 rounded-2xl bg-[#0F1C1B] p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Bot size={18} className="text-emerald-400" />
                  <span className="font-medium">Account Manager AI</span>
                </div>

                <div className="rounded-xl border border-zinc-800 p-3 text-sm text-zinc-300">
                  Revenue increased 18% this month.
                  WhatsApp campaign generated 42 leads.
                  Recommend launching a festive offer next week.
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function AgentCard({
  icon,
  title,
  status,
}: {
  icon: React.ReactNode;
  title: string;
  status: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-[#0F1C1B] p-4">
      <div className="mb-3 flex items-center gap-2 text-emerald-400">
        {icon}
      </div>

      <h4 className="font-medium">{title}</h4>

      <p className="mt-1 text-sm text-zinc-400">
        {status}
      </p>
    </div>
  );
}