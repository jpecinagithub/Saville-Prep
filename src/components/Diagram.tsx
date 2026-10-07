import type { DiagramPanel, ShapeSpec } from "../types";

function Shape({ s }: { s: ShapeSpec }) {
  const cx = s.x;
  const cy = s.y;
  const r = s.size / 2;
  const fill = s.fill ? "#1e3a5f" : "none";
  const stroke = "#1e3a5f";
  const sw = Math.max(2, s.size / 14);
  const rotate = s.rotate ? `rotate(${s.rotate} ${cx} ${cy})` : undefined;

  const common = { fill, stroke, strokeWidth: sw, transform: rotate };

  switch (s.kind) {
    case "circle":
      return <circle cx={cx} cy={cy} r={r} {...common} />;
    case "square":
      return <rect x={cx - r} y={cy - r} width={s.size} height={s.size} {...common} />;
    case "diamond":
      return (
        <polygon
          points={`${cx},${cy - r} ${cx + r},${cy} ${cx},${cy + r} ${cx - r},${cy}`}
          {...common}
        />
      );
    case "triangle": {
      const h = (s.size * Math.sqrt(3)) / 2;
      return (
        <polygon
          points={`${cx},${cy - (2 / 3) * h} ${cx + r},${cy + h / 3} ${cx - r},${cy + h / 3}`}
          {...common}
        />
      );
    }
    case "pentagon": {
      const pts = Array.from({ length: 5 }, (_, i) => {
        const a = (-90 + i * 72) * (Math.PI / 180);
        return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
      }).join(" ");
      return <polygon points={pts} {...common} />;
    }
    case "star": {
      const pts: string[] = [];
      for (let i = 0; i < 10; i++) {
        const a = (-90 + i * 36) * (Math.PI / 180);
        const rr = i % 2 === 0 ? r : r * 0.45;
        pts.push(`${cx + rr * Math.cos(a)},${cy + rr * Math.sin(a)}`);
      }
      return <polygon points={pts.join(" ")} {...common} />;
    }
    case "cross": {
      const t = s.size / 3;
      return (
        <polygon
          points={[
            `${cx - t / 2},${cy - r}`,
            `${cx + t / 2},${cy - r}`,
            `${cx + t / 2},${cy - t / 2}`,
            `${cx + r},${cy - t / 2}`,
            `${cx + r},${cy + t / 2}`,
            `${cx + t / 2},${cy + t / 2}`,
            `${cx + t / 2},${cy + r}`,
            `${cx - t / 2},${cy + r}`,
            `${cx - t / 2},${cy + t / 2}`,
            `${cx - r},${cy + t / 2}`,
            `${cx - r},${cy - t / 2}`,
            `${cx - t / 2},${cy - t / 2}`,
          ].join(" ")}
          {...common}
        />
      );
    }
    case "arrow": {
      const w = r;
      return (
        <polygon
          points={`${cx - w},${cy - w * 0.55} ${cx + w * 0.25},${cy - w * 0.55} ${cx + w * 0.25},${cy - w} ${cx + w},${cy} ${cx + w * 0.25},${cy + w} ${cx + w * 0.25},${cy + w * 0.55} ${cx - w},${cy + w * 0.55}`}
          {...common}
        />
      );
    }
  }
}

export function DiagramPanelView({
  panel,
  size = 120,
  caption,
}: {
  panel: DiagramPanel;
  size?: number;
  caption?: string;
}) {
  return (
    <figure className="inline-flex flex-col items-center">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        role="img"
        aria-label={caption ?? "Diagram"}
        className="rounded-lg border border-slate-200 bg-white"
      >
        {panel.shapes.map((s, i) => (
          <Shape key={i} s={s} />
        ))}
      </svg>
      {caption && (
        <figcaption className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function DiagramRow({
  panels,
  captions,
  size,
}: {
  panels: DiagramPanel[];
  captions?: (string | undefined)[];
  size?: number;
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
      {panels.map((p, i) => (
        <DiagramPanelView
          key={i}
          panel={p}
          size={size}
          caption={captions?.[i]}
        />
      ))}
    </div>
  );
}
