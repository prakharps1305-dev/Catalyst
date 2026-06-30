type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        px-3
        py-1
        text-xs
        font-medium
        bg-[var(--color-surface2)]
        text-[var(--color-sage)]
      "
    >
      {children}
    </span>
  );
}