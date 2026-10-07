import type { ChartData, TableData } from "../types";
import { useT } from "../i18n/useT";

export function ChartView({ chart }: { chart: ChartData }) {
  const { loc } = useT();
  const W = 560;
  const H = 300;
  const padL = 56;
  const padR = 16;
  const padT = 28;
  const padB = 44;
  const iw = W - padL - padR;
  const ih = H - padT - padB;
  const max = Math.max(...chart.values, 0) * 1.15 || 1;
  const n = chart.values.length;
  const stepX = iw / n;
  const unit = chart.unit ? loc(chart.unit) : "";

  const x = (i: number) => padL + stepX * i + stepX / 2;
  const y = (v: number) => padT + ih - (v / max) * ih;

  return (
    <figure className="mx-auto w-full max-w-2xl">
      {chart.title && (
        <figcaption className="mb-2 text-center text-sm font-semibold text-slate-700">
          {loc(chart.title)}
        </figcaption>
      )}
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={chart.title ? loc(chart.title) : "Chart"}
        className="w-full rounded-lg border border-slate-200 bg-white p-1"
      >
        {/* gridlines */}
        {[0, 0.25, 0.5, 0.75, 1].map((f) => (
          <g key={f}>
            <line
              x1={padL}
              x2={W - padR}
              y1={padT + ih * (1 - f)}
              y2={padT + ih * (1 - f)}
              stroke="#e2e8f0"
              strokeWidth={1}
            />
            <text
              x={padL - 8}
              y={padT + ih * (1 - f) + 4}
              textAnchor="end"
              fontSize={11}
              fill="#64748b"
            >
              {Math.round(max * f)}
              {unit ? ` ${unit}` : ""}
            </text>
          </g>
        ))}
        {chart.type === "bar" &&
          chart.values.map((v, i) => (
            <g key={i}>
              <rect
                x={x(i) - stepX * 0.3}
                y={y(v)}
                width={stepX * 0.6}
                height={padT + ih - y(v)}
                rx={3}
                fill="#1e3a5f"
              />
              <text
                x={x(i)}
                y={y(v) - 6}
                textAnchor="middle"
                fontSize={11}
                fontWeight={600}
                fill="#1e3a5f"
              >
                {v}
              </text>
            </g>
          ))}
        {chart.type === "line" && (
          <>
            <polyline
              points={chart.values.map((v, i) => `${x(i)},${y(v)}`).join(" ")}
              fill="none"
              stroke="#1e3a5f"
              strokeWidth={2.5}
            />
            {chart.values.map((v, i) => (
              <g key={i}>
                <circle cx={x(i)} cy={y(v)} r={4.5} fill="#1e3a5f" />
                <text
                  x={x(i)}
                  y={y(v) - 10}
                  textAnchor="middle"
                  fontSize={11}
                  fontWeight={600}
                  fill="#1e3a5f"
                >
                  {v}
                </text>
              </g>
            ))}
          </>
        )}
        {chart.labels.map((lb, i) => (
          <text
            key={i}
            x={x(i)}
            y={H - 14}
            textAnchor="middle"
            fontSize={11}
            fill="#475569"
          >
            {lb}
          </text>
        ))}
      </svg>
    </figure>
  );
}

export function TableView({ table }: { table: TableData }) {
  const { loc } = useT();
  return (
    <figure className="mx-auto w-full max-w-2xl overflow-x-auto">
      {table.caption && (
        <figcaption className="mb-2 text-center text-sm font-semibold text-slate-700">
          {loc(table.caption)}
        </figcaption>
      )}
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            {table.headers.map((h, i) => (
              <th
                key={i}
                scope="col"
                className="border border-slate-300 bg-brand-light px-3 py-2 text-left font-semibold text-brand"
              >
                {loc(h)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, r) => (
            <tr key={r} className={r % 2 ? "bg-slate-50" : "bg-white"}>
              {row.map((cell, c) => (
                <td
                  key={c}
                  className={`border border-slate-300 px-3 py-2 ${
                    c === 0 ? "font-medium text-slate-700" : "text-right tabular-nums"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
