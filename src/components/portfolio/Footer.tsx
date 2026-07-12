export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-hairline">
      <div className="mx-auto flex w-full max-w-[1240px] flex-wrap items-end justify-between gap-8 px-6 py-14 md:px-10">
        <div>
          <div className="font-mono-tight text-[10.5px] uppercase tracking-[0.22em] text-subtle">
            Mubashir Naeem Janjua
          </div>
          <div className="mt-2 font-display text-[1.6rem] leading-none tracking-tight text-foreground">
            Systems, not demos.
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-12 gap-y-2 font-mono-tight text-[12px] text-muted-foreground">
          <a href="#work" className="hover:text-foreground">
            Work
          </a>
          <a href="#about" className="hover:text-foreground">
            About
          </a>
          <a href="#skills" className="hover:text-foreground">
            Skills
          </a>
          <a href="#timeline" className="hover:text-foreground">
            Path
          </a>
          <a href="#github" className="hover:text-foreground">
            GitHub
          </a>
          <a href="#contact" className="hover:text-foreground">
            Contact
          </a>
        </div>
        <div className="font-mono-tight text-[11px] uppercase tracking-[0.2em] text-subtle">
          © {year} · Handcrafted in Pakistan
        </div>
      </div>
    </footer>
  );
}