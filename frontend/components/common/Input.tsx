import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export default function Input({
  label,
  error,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-[var(--color-cream)]">
          {label}
        </label>
      )}

      <input
        className={`
          rounded-xl
          border
          border-[var(--color-hairline)]
          bg-[var(--color-surface2)]
          px-4
          py-3
          text-[var(--color-cream)]
          outline-none
          focus:border-[var(--color-amber)]
          ${className}
        `}
        {...props}
      />

      {error && (
        <p className="text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}