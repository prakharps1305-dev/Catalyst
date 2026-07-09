type ProgressBarProps = {
  currentStep: number;
  totalSteps: number;
  titles: string[];
};

export default function ProgressBar({
  currentStep,
  totalSteps,
  titles,
}: ProgressBarProps) {
  const percentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="mb-10">
      {/* Step indicator */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-sage">
          Step {currentStep} of {totalSteps}
        </span>

        <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">
          {Math.round((currentStep / totalSteps) * 100)}%
        </span>
      </div>

      {/* Progress track */}
      <div className="mt-4 h-1 overflow-hidden rounded-full bg-hairline">
        <div
          className="h-full rounded-full bg-amber transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Step circles */}
      <div className="mt-6 flex justify-between">
        {titles.map((title, index) => {
          const step = index + 1;

          const active = step === currentStep;
          const complete = step < currentStep;

          return (
            <div
              key={title}
              className="flex flex-col items-center gap-2 text-center"
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-mono transition-all ${
                  complete
                    ? "border-sage bg-sage text-base"
                    : active
                    ? "border-amber bg-amber text-base"
                    : "border-hairline bg-surface text-muted"
                }`}
              >
                {complete ? "✓" : step}
              </div>

              <span
                className={`max-w-[70px] text-[0.65rem] leading-tight ${
                  active ? "text-cream" : "text-muted"
                }`}
              >
                {title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}