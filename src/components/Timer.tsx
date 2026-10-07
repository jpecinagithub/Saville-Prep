import { formatClock } from "../hooks/useCountdown";

interface Props {
  remainingMs: number;
  /** size variants */
  size?: "lg" | "md";
  label?: string;
}

/**
 * Highly visible countdown. At <=60s it turns amber and prominent;
 * at <=10s it gains a subtle pulse (disabled under prefers-reduced-motion).
 */
export function Timer({ remainingMs, size = "lg", label }: Props) {
  const secs = remainingMs / 1000;
  const danger = secs <= 60;
  const critical = secs <= 10;
  const text =
    size === "lg" ? "text-5xl md:text-6xl" : "text-3xl md:text-4xl";

  return (
    <div
      className="flex flex-col items-center"
      role="timer"
      aria-live="off"
      aria-label={label ?? "Time remaining"}
    >
      {label && (
        <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">
          {label}
        </div>
      )}
      <div
        className={`font-mono font-bold tabular-nums ${text} ${
          critical
            ? "timer-critical text-red-700"
            : danger
              ? "text-amber-700"
              : "text-brand"
        }`}
      >
        {formatClock(remainingMs)}
      </div>
    </div>
  );
}
