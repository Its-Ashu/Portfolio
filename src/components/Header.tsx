import { useEffect, useState } from "react";
import { Link, useRouter } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goAnchor = async (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setOpen(false);
    if (router.state.location.pathname !== "/") {
      await router.navigate({ to: "/" });
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`flex items-center justify-between rounded-full px-4 py-2 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-2xl shadow-black/30" : "bg-transparent"
          }`}
        >
          <Link
            to="/"
            className="group flex items-center gap-2 px-2 py-1 font-display text-base font-bold tracking-tight"
          >
            <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[oklch(0.78_0.18_290)] to-[oklch(0.78_0.16_215)] text-[oklch(0.12_0.02_270)] shadow-lg shadow-[oklch(0.74_0.19_290/0.4)]">
              AP
            </span>
            <span className="hidden sm:inline gradient-text">Ashish Pipaliya</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.name}
                href={l.href}
                onClick={(e) => goAnchor(e, l.href)}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/Portfolio/AshishPipaliya_ReactNative_CV.pdf"
              download
              className="hidden btn-primary text-sm md:inline-flex"
            >
              Download CV
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 md:hidden"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                ) : (
                  <>
                    <path d="M4 7h16" strokeLinecap="round" />
                    <path d="M4 17h16" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="glass-strong mt-2 overflow-hidden rounded-2xl p-3 md:hidden"
            >
              <div className="flex flex-col">
                {navLinks.map((l) => (
                  <a
                    key={l.name}
                    href={l.href}
                    onClick={(e) => goAnchor(e, l.href)}
                    className="rounded-xl px-3 py-3 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  >
                    {l.name}
                  </a>
                ))}
                <a
                  href="/Portfolio/AshishPipaliya_ReactNative_CV.pdf"
                  download
                  className="btn-primary mt-2 w-full text-sm"
                >
                  Download CV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
