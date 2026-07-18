import { Section, Reveal } from "./primitives";
import { GitBranch, Star, GitCommit } from "lucide-react";
import { useEffect, useState } from "react";

const GH_USER = "mubashirnaeemj";

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

const CELL_COLORS = [
  "bg-white/[0.04]",
  "bg-primary/20",
  "bg-primary/40",
  "bg-primary/65",
  "bg-primary",
];

type Contrib = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

function buildWeeks(contribs: Contrib[]): number[][] {
  // Take the last 364 days aligned to weeks starting on Sunday
  const sorted = [...contribs].sort((a, b) => a.date.localeCompare(b.date));
  const last = sorted.slice(-371);
  // Pad start so first column begins on Sunday
  const firstDow = new Date(last[0]?.date ?? new Date()).getUTCDay();
  const padded: (number | null)[] = Array(firstDow).fill(null).concat(last.map((c) => c.level));
  const weeks: number[][] = [];
  for (let i = 0; i < padded.length; i += 7) {
    const week = padded.slice(i, i + 7).map((v) => (v == null ? 0 : v));
    while (week.length < 7) week.push(0);
    weeks.push(week);
  }
  return weeks.slice(-52);
}

export function GitHubStats() {
  const [weeks, setWeeks] = useState<number[][] | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://github-contributions-api.jogruber.de/v4/${GH_USER}?y=last`)
      .then((r) => {
        if (!r.ok) throw new Error("bad status");
        return r.json();
      })
      .then((data: { total: Record<string, number>; contributions: Contrib[] }) => {
        if (cancelled) return;
        setWeeks(buildWeeks(data.contributions));
        const totals = Object.values(data.total ?? {});
        setTotal(totals.length ? totals[totals.length - 1] : data.contributions.reduce((s, c) => s + c.count, 0));
      })
      .catch(() => !cancelled && setError(true));
    return () => {
      cancelled = true;
    };
  }, []);

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
                  {total != null ? total.toLocaleString() : error ? "—" : "…"}{" "}
                  <span className="text-muted-foreground">contributions</span>
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
                {(weeks ?? Array.from({ length: 52 }, () => Array(7).fill(0))).map((week, wi) => (
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