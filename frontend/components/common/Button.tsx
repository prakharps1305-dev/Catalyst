import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  loading?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  loading = false,
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-[var(--color-amber)] text-[var(--color-base)] hover:opacity-90",

    secondary:
      "bg-[var(--color-surface2)] text-[var(--color-cream)] border border-[var(--color-hairline)] hover:bg-[var(--color-surface)]",

    ghost:
      "bg-transparent text-[var(--color-cream)] hover:bg-[var(--color-surface2)]",
  };

  return (
    <button
      className={`
        px-5 py-3
        rounded-xl
        font-medium
        transition-all
        duration-200
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${variants[variant]}
        ${className}
      `}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}