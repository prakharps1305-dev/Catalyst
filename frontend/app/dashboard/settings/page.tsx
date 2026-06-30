export default function SettingsPage() {
  return (
    <main className="flex-1 px-8 py-10">
      <div className="max-w-5xl">

        <p className="eyebrow mb-3 text-amber">
          Settings
        </p>

        <h1 className="font-display text-4xl text-cream">
          Workspace settings.
        </h1>

        <p className="mt-3 max-w-xl text-muted">
          Manage your Catalyst workspace, account preferences and AI behavior.
        </p>

        <div className="mt-10 space-y-6">

          {/* Account */}

          <section className="rounded-md border border-hairline bg-surface/40 p-7">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-display text-2xl text-cream">
                  Account
                </h2>
                <p className="mt-1 text-sm text-muted">
                  Personal information associated with your account.
                </p>
              </div>

              <button className="rounded-sm border border-amber px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-amber transition-colors hover:bg-amber hover:text-base">
                Edit
              </button>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Setting label="Full Name" value="Jordan Diaz" />
              <Setting label="Email" value="jordan@company.com" />
              <Setting label="Role" value="Owner" />
              <Setting label="Workspace" value="Acme Marketing" />
            </div>
          </section>

          {/* Security */}

          <section className="rounded-md border border-hairline bg-surface/40 p-7">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-display text-2xl text-cream">
                  Security
                </h2>

                <p className="mt-1 text-sm text-muted">
                  Protect access to your Catalyst workspace.
                </p>
              </div>

              <button className="rounded-sm border border-hairline px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-muted transition-colors hover:border-amber hover:text-amber">
                Change Password
              </button>
            </div>

            <div className="mt-8 space-y-5">

              <Toggle
                title="Two-factor authentication"
                description="Add an additional layer of security to your account."
              />

              <Toggle
                title="Login notifications"
                description="Receive an email whenever a new device signs in."
              />

            </div>
          </section>

          {/* AI Preferences */}

          <section className="rounded-md border border-hairline bg-surface/40 p-7">

            <h2 className="font-display text-2xl text-cream">
              AI Preferences
            </h2>

            <p className="mt-1 text-sm text-muted">
              Control how Catalyst communicates and makes recommendations.
            </p>

            <div className="mt-8 space-y-5">

              <Toggle
                title="Weekly AI Insights"
                description="Receive a weekly growth summary."
              />

              <Toggle
                title="Agent Recommendations"
                description="Allow Catalyst to suggest new AI agents."
              />

              <Toggle
                title="Marketing Emails"
                description="Receive product updates and new features."
              />

            </div>

          </section>

          {/* Danger Zone */}

          <section className="rounded-md border border-red-500/20 bg-red-500/5 p-7">

            <h2 className="font-display text-2xl text-red-300">
              Danger Zone
            </h2>

            <p className="mt-2 max-w-lg text-sm text-muted">
              Permanently delete your workspace and all associated data.
              This action cannot be undone.
            </p>

            <button className="mt-6 rounded-sm border border-red-500 px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-red-300 transition-colors hover:bg-red-500 hover:text-white">
              Delete Workspace
            </button>

          </section>

        </div>
      </div>
    </main>
  );
}

function Setting({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">
        {label}
      </p>

      <p className="mt-2 text-cream">
        {value}
      </p>
    </div>
  );
}

function Toggle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-md border border-hairline bg-base/40 p-4">

      <div>
        <h3 className="text-cream">
          {title}
        </h3>

        <p className="mt-1 text-sm text-muted">
          {description}
        </p>
      </div>

      <button className="relative h-6 w-11 rounded-full bg-surface2 transition-colors">
        <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-cream" />
      </button>

    </div>
  );
}