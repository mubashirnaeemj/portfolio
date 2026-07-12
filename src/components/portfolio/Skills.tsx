import {
  Cpu,
  Workflow,
  Server,
  Plug,
  Cloud,
  MonitorSmartphone,
  type LucideIcon,
} from "lucide-react";
import { Section, Reveal } from "./primitives";
import { SKILL_GROUPS } from "./data";

const ICONS: Record<string, LucideIcon> = {
  AI: Cpu,
  Automation: Workflow,
  Backend: Server,
  Integrations: Plug,
  Infrastructure: Cloud,
  "Client & Desktop": MonitorSmartphone,
};

export function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      label="Stack"
      title="The tools I actually reach for."
      intro={
        <>
          No progress bars, no self-rated stars. Just the stack I use in the systems I ship —
          grouped by the job they do.
        </>
      }
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((g, i) => {
          const Icon = ICONS[g.category] ?? Cpu;
          return (
            <Reveal
              key={g.category}
              delay={i * 0.04}
              className="group relative bg-background p-7 transition-colors hover:bg-surface/60"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-primary transition-colors group-hover:border-primary/40">
                  <Icon size={16} strokeWidth={1.75} />
                </span>
                <h3 className="font-display text-[1.4rem] leading-none tracking-tight text-foreground">
                  {g.category}
                </h3>
              </div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">
                {g.caption}
              </p>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-full border border-hairline bg-surface/60 px-2.5 py-1 font-mono-tight text-[11px] text-muted-foreground"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}