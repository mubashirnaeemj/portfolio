import { Section, Reveal } from "./primitives";
import { Mail, Linkedin, Github, ArrowUpRight, Download } from "lucide-react";

const LINKS = [
  {
    label: "Email",
    value: "mubashirnaeemj@gmail.com",
    href: "mailto:mubashirnaeemj@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Mubashir Naeem",
    href: "https://www.linkedin.com/in/mubashirnaeemj/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "@mubashirnaeemj",
    href: "https://github.com/mubashirnaeemj",
    icon: Github,
  },
  {
    label: "Resume",
    value: "PDF · updated 2026",
    href: resumeAsset.url,
    icon: Download,
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      index="06"
      label="Contact"
      title={
        <>
          Have a process that should be
          <br />
          a system? Let&apos;s talk.
        </>
      }
      intro={
        <>
          I&apos;m open to full-time roles and select contract engagements building AI backends,
          voice agents, and automation platforms. Fastest reply is by email.
        </>
      }
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
        {LINKS.map((l, i) => {
          const Icon = l.icon;
          return (
            <Reveal key={l.label} delay={i * 0.04}>
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center justify-between bg-background p-8 transition-colors hover:bg-surface/70"
              >
                <div className="flex items-center gap-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-primary transition-colors group-hover:border-primary/50">
                    <Icon size={16} strokeWidth={1.75} />
                  </span>
                  <div>
                    <div className="font-mono-tight text-[10.5px] uppercase tracking-[0.22em] text-subtle">
                      {l.label}
                    </div>
                    <div className="mt-1.5 font-display text-[1.35rem] leading-tight tracking-tight text-foreground">
                      {l.value}
                    </div>
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                />
              </a>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}