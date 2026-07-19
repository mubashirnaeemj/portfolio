import { motion } from "motion/react";
import { ArrowUpRight, Download } from "lucide-react";
import { ArchitectureViz } from "./ArchitectureViz";
import resumeAsset from "../../assets/resume.pdf.asset.json";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-30 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/[0.04] blur-[140px]" />

      <div className="relative mx-auto grid w-full max-w-[1240px] gap-16 px-6 pb-24 md:grid-cols-12 md:gap-10 md:px-10 md:pb-32">
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 font-mono-tight text-[11px] uppercase tracking-[0.22em] text-subtle"
          >
            <span className="tabular-nums text-primary">00</span>
            <span className="h-px w-8 bg-border" />
            <span>Mubashir Naeem Janjua · Pakistan</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="mt-8 font-display text-[2.75rem] leading-[1.02] tracking-tight text-foreground md:text-[4.4rem]"
          >
            AI automation engineer
            <br />
            building intelligent systems
            <br />
            that <em className="text-primary not-italic">run real business operations</em>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="mt-8 max-w-xl text-[15.5px] leading-relaxed text-muted-foreground"
          >
            I design AI-powered backend systems, workflow automations, voice agents, and the
            integrations that quietly hold them together in production. Less demos, more systems
            teams actually depend on.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-[13.5px] font-medium text-background transition-transform hover:-translate-y-[1px]"
            >
              View projects
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href={resumeAsset.url}
              target="_blank"
              rel="noreferrer"
              download="Mubashir-Naeem-Resume.pdf"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-[13.5px] font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Download size={14} />
              Download resume
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-hairline pt-8"
          >
            {[
              { k: "Systems in production", v: "5+" },
              { k: "AI calls / day", v: "500" },
              { k: "APIs orchestrated", v: "20+" },
            ].map((m) => (
              <div key={m.k}>
                <dt className="font-mono-tight text-[10.5px] uppercase tracking-[0.18em] text-subtle">
                  {m.k}
                </dt>
                <dd className="mt-2 font-display text-[1.9rem] leading-none tracking-tight text-foreground">
                  {m.v}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="md:col-span-5"
        >
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-4 md:p-5">
            <div className="flex items-center justify-between border-b border-hairline pb-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
              </div>
              <span className="font-mono-tight text-[10.5px] uppercase tracking-[0.18em] text-subtle">
                calling-platform · live
              </span>
            </div>
            <ArchitectureViz />
          </div>
        </motion.div>
      </div>
    </section>
  );
}