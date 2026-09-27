import { Section, Reveal } from "./primitives";
import { GitBranch } from "lucide-react";

const GH_USER = "mubashirnaeemj";

const EMBEDS = {
  graph: `https://github-readme-activity-graph-blond-three.vercel.app/graph?username=${GH_USER}&theme=github-compact&bg_color=09090B&color=3B82F6&line=3B82F6&point=22C55E&area=true&hide_border=true`,
  stats: `https://github-readme-stats-gold-five-85.vercel.app/api?username=${GH_USER}&show_icons=true&theme=dark&hide_border=true&bg_color=09090B&title_color=3B82F6&icon_color=22C55E&text_color=FAFAFA`,
  streak: `https://streak-stats.demolab.com/?user=${GH_USER}&theme=dark&hide_border=true&background=09090B&stroke=3B82F6&ring=3B82F6&fire=22C55E&currStreakLabel=FAFAFA`,
  langs: `https://github-readme-stats-gold-five-85.vercel.app/api/top-langs/?username=${GH_USER}&layout=compact&theme=dark&hide_border=true&bg_color=09090B&title_color=3B82F6&text_color=FAFAFA`,
};

const REPOS = [
  {
    name: "ai-calling-platform",
    desc: "Production outbound AI calling backend — FastAPI, Celery, Deepgram, ElevenLabs, Salesforce.",
    lang: "Python",
  },
  {
    name: "ai-sales-call-copilot",
    desc: "Realtime call copilot for reps — Electron + Deepgram + Claude + Salesforce lookup.",
    lang: "JavaScript",
  },
  {
    name: "lead-enrichment-n8n",
    desc: "n8n workflow — Google Places → OpenAI scoring → Twilio outreach → Salesforce.",
    lang: "n8n",
  },
  {
    name: "sign-language-realtime",
    desc: "Realtime sign-language translation using MediaPipe + TensorFlow on CPU-only hardware.",
    lang: "Python",
  },
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
            <div className="font-mono-tight text-[10.5px] uppercase tracking-[0.22em] text-subtle">
              Contributions · last 12 months
            </div>

            <div className="mt-5 overflow-hidden rounded-xl border border-hairline bg-surface">
              <img
                src={EMBEDS.graph}
                alt={`GitHub contribution graph for ${GH_USER}`}
                className="block h-auto w-full"
                loading="lazy"
              />
            </div>

            <div className="mt-6 grid gap-6 border-t border-hairline pt-6 md:grid-cols-2">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={EMBEDS.stats}
                  alt={`GitHub stats for ${GH_USER}`}
                  className="block h-auto w-full"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img
                  src={EMBEDS.streak}
                  alt={`GitHub streak stats for ${GH_USER}`}
                  className="block h-auto w-full"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="mt-6 border-t border-hairline pt-6">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={EMBEDS.langs}
                  alt={`Top languages for ${GH_USER}`}
                  className="block h-auto w-full"
                  loading="lazy"
                />
              </div>
            </div>
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
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
