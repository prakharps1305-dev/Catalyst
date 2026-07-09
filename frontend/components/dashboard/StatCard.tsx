type Props = {
  title: string;
  value: string;
  subtitle: string;
};

export default function StatCard({
  title,
  value,
  subtitle,
}: Props) {
  return (
    <div className="rounded-md border border-hairline bg-surface/40 p-6">

      <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted">
        {title}
      </p>

      <h2 className="mt-3 font-display text-4xl text-cream">
        {value}
      </h2>

      <p className="mt-2 text-sm text-sage">
        {subtitle}
      </p>

    </div>
  );
}