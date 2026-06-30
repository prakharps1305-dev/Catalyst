import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border border-[var(--color-hairline)]
        bg-[var(--color-surface)]
        p-6
        shadow-sm
        hover-lift
        ${className}
      `}
    >
      {children}
    </div>
  );
}