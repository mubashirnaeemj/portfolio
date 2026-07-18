import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Section, Reveal } from "./primitives";
import { PROJECTS, type Project } from "./data";
import { ProjectFlow } from "./ProjectFlow";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <Section
      id="work"
      index="03"
      label="Selected work"
      title="Five systems, running in production."
      intro={
        <>
          Each of these solved a specific problem for a real operator. Below: what was broken, how
          it was rebuilt, and the shape of the system underneath.
        </>
      }
    >
      <div className="space-y-24 md:space-y-32">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} reversed={i % 2 === 1} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project, reversed }: { project: Project; reversed: boolean }) {
  const accent =
    project.accent === "primary" ? "text-primary" : "text-accent";
  return (
    <article
      id={project.id}
      className="relative scroll-mt-24 overflow-hidden rounded-3xl border border-border bg-surface/40"
    >
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-25 [mask-image:radial-gradient(ellipse_at_top_right,black_10%,transparent_60%)]" />

      <div className="relative grid gap-10 p-8 md:grid-cols-12 md:gap-10 md:p-12">
        {/* Header */}
        <header
          className={cn(
            "md:col-span-12 flex flex-wrap items-end justify-between gap-6 border-b border-hairline pb-8",
          )}
        >
          <div>
            <div className="flex items-center gap-3 font-mono-tight text-[11px] uppercase tracking-[0.22em] text-subtle">
              <span className={cn("tabular-nums", accent)}>{project.index}</span>
              <span className="h-px w-8 bg-border" />
              <span>
                {project.year} · {project.role}
              </span>
            </div>
            <h3 className="mt-5 font-display text-[2.1rem] leading-[1.05] tracking-tight text-foreground md:text-[2.8rem]">
              {project.name}
            </h3>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              {project.tagline}
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-background px-3 py-1 font-mono-tight text-[11px] text-muted-foreground">
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                project.accent === "primary" ? "bg-primary" : "bg-accent",
              )}
            />
            {project.status}
          </span>
        </header>

        {/* Body */}
        <div
          className={cn(
            "md:col-span-7 space-y-8",
            reversed && "md:order-2",
          )}
        >
          <Block label="Problem" body={project.problem} />
          <Block label="Solution" body={project.solution} />
          <div>
            <BlockLabel>Architecture</BlockLabel>
            <ol className="mt-4 space-y-3 text-[14.5px] leading-relaxed text-muted-foreground">
              {project.architecture.map((line, i) => (
                <li key={i} className="flex gap-4">
                  <span className="mt-[7px] block h-px w-4 shrink-0 bg-border" />
                  <span>{line}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <BlockLabel>Challenges</BlockLabel>
              <ul className="mt-4 space-y-2 text-[14px] leading-relaxed text-muted-foreground">
                {project.challenges.map((c, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className={cn("mt-2 h-1 w-1 shrink-0 rounded-full", project.accent === "primary" ? "bg-primary" : "bg-accent")} />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <BlockLabel>Outcome</BlockLabel>
              <p className="mt-4 text-[14.5px] leading-relaxed text-foreground">
                {project.outcome}
              </p>
            </div>
          </div>
        </div>

        {/* Side rail */}
        <div className={cn("md:col-span-5 space-y-6", reversed && "md:order-1")}>
          {project.flow && (
            <ProjectFlow nodes={project.flow} accent={project.accent} />
          )}
          <MetricsPanel project={project} />
          <div>
            <BlockLabel>Stack</BlockLabel>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-hairline bg-background px-2.5 py-1 font-mono-tight text-[11px] text-muted-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 border-b border-hairline pb-2 text-[13px] text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Discuss the build
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </article>
  );
}

function BlockLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono-tight text-[10.5px] uppercase tracking-[0.22em] text-subtle">
      {children}
    </span>
  );
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <BlockLabel>{label}</BlockLabel>
      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

function MetricsPanel({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-background">
      <div className="flex items-center justify-between border-b border-hairline px-5 py-3">
        <span className="font-mono-tight text-[10.5px] uppercase tracking-[0.22em] text-subtle">
          Signals
        </span>
        <span
          className={cn(
            "font-mono-tight text-[10.5px] uppercase tracking-[0.22em]",
            project.accent === "primary" ? "text-primary" : "text-accent",
          )}
        >
          ● live
        </span>
      </div>
      <dl className="grid grid-cols-2 divide-x divide-y divide-hairline">
        {project.metrics.map((m, i) => (
          <Reveal key={m.label} delay={i * 0.05} className="p-5">
            <dt className="font-mono-tight text-[10.5px] uppercase tracking-[0.18em] text-subtle">
              {m.label}
            </dt>
            <dd className="mt-3 font-display text-[1.8rem] leading-none tracking-tight text-foreground">
              <motion.span
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
              >
                {m.value}
              </motion.span>
            </dd>
          </Reveal>
        ))}
      </dl>
    </div>
  );
}