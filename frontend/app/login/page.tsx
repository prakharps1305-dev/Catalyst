
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="grid min-h-screen bg-base text-cream md:grid-cols-2">
      {/* Branding panel — hidden on small screens */}
      <div className="relative hidden flex-col justify-between overflow-hidden border-r border-hairline bg-surface/40 p-10 md:flex lg:p-14">
        <a href="/" className="flex items-center gap-2.5">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="9.5" stroke="#FF8A3D" strokeWidth="1.4" />
            <path d="M12 6.5V12L16 14.5" stroke="#FF8A3D" strokeWidth="1.4" strokeLinecap="round" />
            <circle cx="12" cy="12" r="1.4" fill="#FF8A3D" />
          </svg>
          <span className="font-mono text-sm tracking-wide text-cream">
            Catalyst<span className="text-amber">.AI</span>
          </span>
        </a>

        <div>
          <p className="eyebrow text-amber mb-4">Flight plan — live</p>
          <h2 className="font-display max-w-sm text-2xl leading-tight text-cream lg:text-[1.9rem]">
            Every login picks up exactly where your last experiment left off.
          </h2>
        </div>

        <p className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted">
          Trusted by 400+ growth teams
        </p>
      </div>

      {/* Form panel */}
      <div className="flex flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm">
          <a href="/" className="mb-10 flex items-center gap-2.5 md:hidden">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="9.5" stroke="#FF8A3D" strokeWidth="1.4" />
              <path d="M12 6.5V12L16 14.5" stroke="#FF8A3D" strokeWidth="1.4" strokeLinecap="round" />
              <circle cx="12" cy="12" r="1.4" fill="#FF8A3D" />
            </svg>
            <span className="font-mono text-sm text-cream">
              Catalyst<span className="text-amber">.AI</span>
            </span>
          </a>

          <p className="eyebrow text-amber mb-3">Access</p>
          <h1 className="font-display text-3xl leading-tight text-cream">
            Welcome back.
          </h1>
          <p className="mt-3 text-sm text-muted">
            Sign in to keep your flight plan running.
          </p>

          <div className="mt-8">
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}
