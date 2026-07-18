import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  nodes: string[];
  accent?: "primary" | "accent";
};

export function ProjectFlow({ nodes, accent = "primary" }: Props) {
  const accentClass = accent === "primary" ? "text-primary" : "text-accent";
  const dotClass = accent === "primary" ? "bg-primary" : "bg-accent";
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-background">
      <div className="flex items-center justify-between border-b border-hairline px-5 py-3">
        <span className="font-mono-tight text-[10.5px] uppercase tracking-[0.22em] text-subtle">
          Flow
        </span>
        <span
          className={cn(
            "font-mono-tight text-[10.5px] uppercase tracking-[0.22em]",
            accentClass,
          )}
        >
          ● animated
        </span>
      </div>
      <div className="relative p-5">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
        <ol className="relative flex flex-wrap items-center gap-x-2 gap-y-3">
          {nodes.map((n, i) => (
            <li key={n} className="flex items-center gap-2">
              <motion.span
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
                className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/70 px-2.5 py-1 font-mono-tight text-[11px] text-foreground"
              >
                <span className={cn("h-1.5 w-1.5 rounded-full", dotClass)} />
                {n}
              </motion.span>
              {i < nodes.length - 1 && (
                <span className="relative block h-px w-6 overflow-hidden bg-border">
                  <motion.span
                    className={cn("absolute inset-y-0 left-0 w-2", dotClass)}
                    initial={{ x: "-100%" }}
                    animate={{ x: "300%" }}
                    transition={{
                      duration: 2.6,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.25,
                    }}
                    style={{ opacity: 0.85 }}
                  />
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}