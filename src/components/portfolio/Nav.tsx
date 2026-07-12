import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#timeline", label: "Path" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled ? "backdrop-blur-md" : "",
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-[1240px] items-center justify-between px-6 py-4 md:px-10",
          scrolled ? "border-b border-hairline bg-background/70" : "border-b border-transparent",
        )}
      >
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative flex h-7 w-7 items-center justify-center rounded-md border border-border bg-surface">
            <span className="absolute inset-1 rounded-[3px] bg-primary/15" />
            <span className="relative font-display text-[15px] leading-none text-foreground">m</span>
          </span>
          <span className="hidden text-[13px] tracking-tight text-muted-foreground transition-colors group-hover:text-foreground sm:inline">
            Mubashir Naeem Janjua
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-1.5 text-[13px] text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-[12.5px] text-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          Available for work
        </a>
      </div>
    </header>
  );
}