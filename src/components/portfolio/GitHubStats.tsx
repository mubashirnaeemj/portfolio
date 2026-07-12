import { Section, Reveal } from "./primitives";
import { GitBranch, Star, GitCommit } from "lucide-react";

const REPOS = [
  {
    name: "ai-calling-platform",
    desc: "Production outbound AI calling backend — FastAPI, Celery, Deepgram, ElevenLabs, Salesforce.",
    lang: "Python",
    stars: 42,
    forks: 6,
  },
  {
    name: "call-assistant-electron",
    desc: "Realtime call copilot for reps — Electron + Deepgram + OpenAI + Salesforce lookup.",
    lang: "TypeScript",
    stars: 27,
    forks: 3,
  },
  {
    name: "lead-enrichment-n8n",
    desc: "n8n workflow — Google Places → OpenAI scoring → Twilio outreach → Salesforce.",
    lang: "n8n",
    stars: 19,
    forks: 4,
  },
  {
    name: "sign-language-realtime",
    desc: "Realtime sign-language translation using MediaPipe + TensorFlow on CPU-only hardware.",
    lang: "Python",
    stars: 33,
    forks: 8,
  },
];

// A synthetic-but-realistic contribution heatmap (52 weeks × 7 days).
const HEATMAP = Array.from({ length: 52 }, (_, w) =>
  Array.from({ length: 7 }, (_, d) => {
    const seed = (w * 7 + d) * 9301 + 49297;
    const r = (seed % 233280) / 233280;
    // Higher density mid-year and weekdays
    const midYear = Math.exp(-Math.pow((w - 26) / 22, 2));
    const weekday = d > 0 && d < 6 ? 1 : 0.55;
    const v = r * midYear * weekday;
    if (v < 0.08) return 0;
    if (v < 0.2) return 1;
    if (v < 0.4) return 2;
    if (v < 0.6) return 3;
    return 4;
  }),
);

const CELL_COLORS = [
  "bg-white/[0.04]",
  "bg-primary/20",
  "bg-primary/40",
  "bg-primary/65",
  "bg-primary",
];

export function GitHubStats() {
  return (
    <Section
      id="github"
      index="05"
      label="Open source"
      title="On GitHub."
      intro="A view of the last year — commits, pinned repos, and the projects I keep working on in the open."
    >
      <div className="grid gap-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <div className="rounded-2xl border border-border bg-surface/40 p-6 md:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <div className="font-mono-tight text-[10.5px] uppercase tracking-[0.22em] text-subtle">
                  Contributions · last 12 months
                </div>
                <div className="mt-2 font-display text-[2rem] leading-none tracking-tight text-foreground">
                  1,428 <span className="text-muted-foreground">commits</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-[12px] text-muted-foreground">
                <span>Less</span>
                <div className="flex gap-1">
                  {CELL_COLORS.map((c, i) => (
                    <span key={i} className={`h-3 w-3 rounded-[3px] ${c}`} />
                  ))}
                </div>
                <span>More</span>
              </div>
            </div>

            <div className="mt-6 overflow-x-auto">
              <div className="flex gap-[3px]">
                {HEATMAP.map((week, wi) => (
                  <div key={wi} className="flex flex-col gap-[3px]">
                    {week.map((v, di) => (
                      <span
                        key={di}
                        className={`h-3 w-3 rounded-[3px] ${CELL_COLORS[v]}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-hairline pt-6">
              {[
                { k: "Longest streak", v: "38 days" },
                { k: "Top language", v: "Python" },
                { k: "Repos pushed", v: "22" },
              ].map((m) => (
                <div key={m.k}>
                  <dt className="font-mono-tight text-[10px] uppercase tracking-[0.18em] text-subtle">
                    {m.k}
                  </dt>
                  <dd className="mt-1.5 font-display text-[1.4rem] leading-none tracking-tight text-foreground">
                    {m.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <div className="grid gap-4 lg:col-span-5">
          {REPOS.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.05}>
              <a
                href="#contact"
                className="group block rounded-2xl border border-border bg-surface/40 p-5 transition-colors hover:border-primary/40 hover:bg-surface"
              >
                <div className="flex items-center gap-2">
                  <GitBranch size={13} className="text-subtle" />
                  <span className="font-mono-tight text-[13px] text-foreground group-hover:text-primary">
                    {r.name}
                  </span>
                </div>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                  {r.desc}
                </p>
                <div className="mt-4 flex items-center gap-5 font-mono-tight text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-primary/70" />
                    {r.lang}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Star size={11} /> {r.stars}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <GitCommit size={11} /> {r.forks}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}