"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";



const navItems = [
  {
    section: "Workspace",
    items: [
      {
        label: "Overview",
        icon: "grid",
        href: "/dashboard",
      },
      {
        label: "AI Workforce",
        icon: "plane",
        href: "/dashboard",
      },
      {
        label: "Business Profile",
        icon: "building",
        href: "/dashboard/profile",
      },
    ],
  },

  {
    section: "Platform",
    items: [
      {
        label: "Marketplace(soon)",
        icon: "store",
        href: "/dashboard/marketplace",
      },
      {
        label: "Settings",
        icon: "gear",
        href: "/dashboard/settings",
      },
    ],
  },
];

function NavIcon({ name }: { name: string }) {
  const common = { width: 17, height: 17, viewBox: "0 0 24 24", fill: "none" as const };
  switch (name) {
    case "grid":
      return (
        <svg {...common} aria-hidden="true">
          <rect x="3.5" y="3.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="13.5" y="3.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="3.5" y="13.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="13.5" y="13.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "plane":
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 6.5V12L16 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "flask":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M4 20V10M11 20V4M18 20v-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "card":
      return (
        <svg {...common} aria-hidden="true">
          <rect x="3" y="6" width="18" height="13" rx="1.6" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 10.5h18" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "gear":
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M19.4 13.5a1.7 1.7 0 000-3l1-1.7-1.7-1-1.7 1a1.7 1.7 0 00-1.5-.9L15 5h-2l-.5 2.4a1.7 1.7 0 00-1.5.9l-1.7-1-1.7 1 1 1.7a1.7 1.7 0 000 3l-1 1.7 1.7 1 1.7-1c.4.5.9.8 1.5.9L13 19h2l.5-2.4c.6-.1 1.1-.4 1.5-.9l1.7 1 1.7-1z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
      
      case "building":
      return (
        <svg {...common} aria-hidden="true">
        <path
        d="M5 20V5h9v15M14 10h5v10M8 8h2M8 11h2M8 14h2M16.5 13h1M16.5 16h1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      </svg>
       );

    case "store":
      return (
      <svg {...common} aria-hidden="true">
      <path
        d="M4 8l1-3h14l1 3v2a2 2 0 01-2 2H6a2 2 0 01-2-2V8zm1 4h14v8H5v-8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      </svg>
  );
  }
}

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const content = (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2.5 px-6 py-6">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9.5" stroke="#FF8A3D" strokeWidth="1.4" />
          <path d="M12 6.5V12L16 14.5" stroke="#FF8A3D" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="12" cy="12" r="1.4" fill="#FF8A3D" />
        </svg>
        <span className="font-mono text-sm text-cream">
          Catalyst<span className="text-amber">.AI</span>
        </span>
      </div>

      <nav className="flex-1 px-3 py-2">
  {navItems.map((section) => (
    <div key={section.section} className="mb-7">

      <p className="px-3 pb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted/70">
        {section.section}
      </p>

      <ul className="space-y-1">

        {section.items.map((item) => (
          <li key={item.label}>
            <button
              onClick={() => router.push(item.href)}
              className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 font-mono text-xs uppercase tracking-[0.1em] transition-all ${
                pathname === item.href
                  ? "bg-amber/10 text-amber border border-amber/20"
                  : "text-muted hover:bg-surface/60 hover:text-cream"
              }`}
            >
              <NavIcon name={item.icon} />
              {item.label}
            </button>
          </li>
        ))}

      </ul>
    </div>
  ))}
</nav>

      <div className="border-t border-hairline px-4 py-4 space-y-4">

        <div className="flex items-center gap-3 rounded-sm px-2 py-2 hover:bg-surface/60">
         <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface2 font-mono text-xs text-cream">
         JD
        </div>

       <div className="min-w-0">
         <p className="truncate text-sm text-cream">
               Jordan Diaz
         </p>

          <p className="truncate font-mono text-[0.65rem] text-muted">
            Acme Co.
          </p>
         </div>
        </div>

        <button
         onClick={() => router.push("/")}
           className="w-full rounded-sm border border-hairline py-2 font-mono text-xs uppercase tracking-[0.12em] text-muted transition hover:border-amber hover:text-amber"
            >
            Log Out
       </button>

      </div>
      
      </div>
  );

  return (
    <>
      {/* Mobile top bar */}
      <div className="flex items-center justify-between border-b border-hairline bg-base px-4 py-3 md:hidden">
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
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="flex h-9 w-9 items-center justify-center rounded-sm border border-hairline text-cream"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden w-60 shrink-0 border-r border-hairline bg-surface/30 md:flex">
        {content}
      </aside>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <aside className="absolute inset-y-0 left-0 w-64 border-r border-hairline bg-base">
            <div className="flex items-center justify-end px-4 py-4">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-8 w-8 items-center justify-center rounded-sm border border-hairline text-cream"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            {content}
          </aside>
        </div>
      )}
    </>
  );
}
