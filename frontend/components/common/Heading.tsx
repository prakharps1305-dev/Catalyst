import { ReactNode } from "react";

type Props = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function Heading({
  title,
  subtitle,
  align = "left",
}: Props) {
  return (
    <div
      className={`space-y-4 ${
        align === "center" ? "text-center" : ""
      }`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-cream)]">
        {title}
      </h2>

      {subtitle && (
        <p className="max-w-2xl text-[var(--color-muted)]">
          {subtitle}
        </p>
      )}
    </div>
  );
}