const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ashish-pipaliya-b0716730b/",
    path: "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z",
  },
  {
    label: "GitHub",
    href: "https://github.com/Its-Ashu",
    path: "M12 2C6.48 2 2 6.48 2 12.02c0 4.42 2.87 8.18 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.35-3.37-1.35-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.5 9.5 0 0112 6.84c.85 0 1.71.11 2.5.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.02 10.02 0 0022 12.02C22 6.48 17.52 2 12 2z",
  },
  {
    label: "Email",
    href: "mailto:ashishpipaliya.dev@gmail.com",
    path: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-16 border-t border-white/5 pt-12 pb-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="font-display text-lg font-bold gradient-text inline-block">
              Ashish Pipaliya
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              React Native developer crafting scalable, high-performance mobile experiences.
            </p>
          </div>
          <div className="md:text-center">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Available for
            </div>
            <div className="mt-2 text-sm">Full-time React Native roles · Contract work</div>
          </div>
          <div className="flex items-start gap-3 md:justify-end">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-white/20 hover:text-foreground"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill={s.label === "Email" ? "none" : "currentColor"} stroke={s.label === "Email" ? "currentColor" : "none"} strokeWidth={s.label === "Email" ? 2 : 0}>
                  <path d={s.path} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Ashish Pipaliya. Crafted with care.</p>
          <p className="font-mono">Built with React · TanStack · Tailwind · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
