import OnboardingForm from "@/components/Onboarding/OnboardingForm";

export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-base text-cream bg-grain">
      <header className="border-b border-hairline px-6 py-5">
        <a href="/" className="mx-auto flex max-w-2xl items-center gap-2.5">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="9.5" stroke="#FF8A3D" strokeWidth="1.4" />
            <path d="M12 6.5V12L16 14.5" stroke="#FF8A3D" strokeWidth="1.4" strokeLinecap="round" />
            <circle cx="12" cy="12" r="1.4" fill="#FF8A3D" />
          </svg>
          <span className="font-mono text-sm text-cream">
            Catalyst<span className="text-amber">.AI</span>
          </span>
        </a>
      </header>

      <div className="mx-auto max-w-2xl px-6 py-16">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-sage">
            Step 1 of 1
          </span>
          <span className="h-px flex-1 bg-hairline" />
        </div>

        <p className="eyebrow text-amber mb-3 mt-6">Pre-flight checklist</p>
        <h1 className="font-display text-3xl leading-tight text-cream md:text-4xl">
          Tell us about your business.
        </h1>
        <p className="mt-3 max-w-md text-muted">
          This sets up your workspace and lets Catalyst tailor its first
          recommendations to your business.
        </p>

        <div className="mt-10 rounded-md border border-hairline bg-surface/40 p-6 md:p-8">
          <OnboardingForm />
        </div>
      </div>
    </main>
  );
}
