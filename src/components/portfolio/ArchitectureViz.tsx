import { motion } from "motion/react";

export function ArchitectureViz() {
  return (
    <div className="relative aspect-[5/6] w-full">
      <div className="absolute inset-0 grid-lines opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
      <svg
        viewBox="0 0 500 600"
        className="relative h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="wire" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.646 0.185 259)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="oklch(0.723 0.17 148)" stopOpacity="0.9" />
          </linearGradient>
          <radialGradient id="node" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.985 0 0)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="oklch(0.985 0 0)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {WIRES.map((d, i) => (
          <path key={i} d={d} stroke="url(#wire)" strokeOpacity="0.35" strokeWidth="1" fill="none" />
        ))}

        {WIRES.map((d, i) => (
          <motion.circle
            key={`p-${i}`}
            r="2.6"
            fill="oklch(0.985 0 0)"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{
              duration: 3.4 + (i % 3) * 0.9,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.35,
            }}
            style={{
              offsetPath: `path('${d}')`,
              filter: "drop-shadow(0 0 6px oklch(0.646 0.185 259 / 0.9))",
            }}
          />
        ))}

        {NODES.map((n) => (
          <g key={n.label} transform={`translate(${n.x} ${n.y})`}>
            <circle r="34" fill="url(#node)" opacity="0.12" />
            <rect
              x={-n.w / 2}
              y={-16}
              width={n.w}
              height={32}
              rx="8"
              fill="oklch(0.185 0.005 285)"
              stroke="oklch(1 0 0 / 0.1)"
            />
            <circle
              cx={-n.w / 2 + 12}
              cy={0}
              r="3.2"
              fill={n.kind === "core" ? "oklch(0.646 0.185 259)" : "oklch(0.723 0.17 148)"}
            />
            <text
              x={-n.w / 2 + 22}
              y={4}
              fontFamily="JetBrains Mono, monospace"
              fontSize="10.5"
              letterSpacing="0.04em"
              fill="oklch(0.985 0 0)"
            >
              {n.label}
            </text>
          </g>
        ))}

        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <motion.rect
            key={i}
            x={80 + i * 42}
            y={556}
            width="6"
            height="18"
            rx="1.5"
            fill="oklch(0.646 0.185 259)"
            fillOpacity="0.6"
            initial={{ scaleY: 0.3 }}
            animate={{ scaleY: [0.3, 1, 0.5, 0.9, 0.3] }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.15,
            }}
            style={{ transformOrigin: `${80 + i * 42 + 3}px 574px` }}
          />
        ))}
        <text
          x="80"
          y="596"
          fontFamily="JetBrains Mono, monospace"
          fontSize="10"
          letterSpacing="0.14em"
          fill="oklch(0.55 0.008 286)"
        >
          LIVE · 500 CALLS / DAY
        </text>
      </svg>
    </div>
  );
}

type Node = { label: string; x: number; y: number; w: number; kind: "core" | "edge" };
const NODES: Node[] = [
  { label: "TRIGGER", x: 90, y: 80, w: 92, kind: "edge" },
  { label: "QUEUE / CELERY", x: 250, y: 150, w: 128, kind: "core" },
  { label: "DEEPGRAM · STT", x: 100, y: 260, w: 128, kind: "edge" },
  { label: "OPENAI · AGENT", x: 380, y: 260, w: 128, kind: "core" },
  { label: "ELEVENLABS · TTS", x: 240, y: 360, w: 148, kind: "edge" },
  { label: "POSTGRES", x: 90, y: 460, w: 108, kind: "core" },
  { label: "SALESFORCE", x: 390, y: 460, w: 120, kind: "edge" },
];

const WIRES = [
  "M90 96 C 90 130, 250 110, 250 134",
  "M250 166 C 250 210, 100 220, 100 244",
  "M250 166 C 250 210, 380 220, 380 244",
  "M100 276 C 100 320, 240 320, 240 344",
  "M380 276 C 380 320, 240 340, 240 344",
  "M240 376 C 240 420, 90 430, 90 444",
  "M240 376 C 240 420, 390 430, 390 444",
];