import { motion, useInView, type Variants } from "motion/react";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionLabel({
  index,
  label,
  className,
}: {
  index: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono-tight text-[11px] uppercase tracking-[0.22em] text-subtle",
        className,
      )}
    >
      <span className="tabular-nums text-primary">{index}</span>
      <span className="h-px w-8 bg-border" />
      <span>{label}</span>
    </div>
  );
}

export function Section({
  id,
  index,
  label,
  title,
  intro,
  children,
  className,
}: {
  id: string;
  index: string;
  label: string;
  title?: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative mx-auto w-full max-w-[1240px] px-6 py-28 md:px-10 md:py-36",
        className,
      )}
    >
      <Reveal>
        <SectionLabel index={index} label={label} />
      </Reveal>
      {(title || intro) && (
        <div className="mt-8 grid gap-10 md:mt-12 md:grid-cols-12">
          {title && (
            <Reveal className="md:col-span-7">
              <h2 className="font-display text-[2.6rem] leading-[1.02] tracking-tight text-foreground md:text-[3.4rem]">
                {title}
              </h2>
            </Reveal>
          )}
          {intro && (
            <Reveal delay={0.05} className="md:col-span-5 md:pt-3">
              <p className="text-[15px] leading-relaxed text-muted-foreground">{intro}</p>
            </Reveal>
          )}
        </div>
      )}
      <div className={cn(title || intro ? "mt-16 md:mt-20" : "mt-10")}>{children}</div>
    </section>
  );
}

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

export function Reveal({
  children,
  delay = 0,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span" | "li";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const MotionTag = motion[As] as typeof motion.div;
  return (
    <MotionTag
      ref={ref}
      className={className}
      custom={delay}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={revealVariants}
    >
      {children}
    </MotionTag>
  );
}

export function Divider({ className }: { className?: string }) {
  return <div className={cn("h-px w-full bg-hairline", className)} />;
}