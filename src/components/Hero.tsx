import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const tx = useTransform(sx, (v) => `${v * 20}px`);
  const ty = useTransform(sy, (v) => `${v * 20}px`);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] as const } },
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-28 pb-20">
      {/* Mouse-follow halo */}
      <motion.div
        aria-hidden
        style={{ x: tx, y: ty }}
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
      >
        <div
          className="h-[70vh] w-[70vh] rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(circle, oklch(0.74 0.19 290 / 0.35), transparent 60%)",
            filter: "blur(60px)",
          }}
        />
      </motion.div>

      {/* Floating orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-float-slow absolute left-[10%] top-[25%] h-20 w-20 rounded-2xl gradient-border opacity-60 backdrop-blur-md" />
        <div
          className="animate-float-slow absolute right-[12%] top-[18%] h-14 w-14 rounded-full gradient-border opacity-60 backdrop-blur-md"
          style={{ animationDelay: "-3s" }}
        />
        <div
          className="animate-float-slow absolute left-[18%] bottom-[22%] h-12 w-12 rounded-xl gradient-border opacity-50 backdrop-blur-md"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="animate-float-slow absolute right-[18%] bottom-[28%] h-24 w-24 rounded-3xl gradient-border opacity-50 backdrop-blur-md"
          style={{ animationDelay: "-2s" }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <motion.div variants={item} className="mb-6 flex justify-center">
          <div className="eyebrow">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new opportunities
          </div>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          <span className="gradient-text">Ashish Pipaliya</span>
          <br />
          <span className="text-foreground/80">React Native</span>{" "}
          <span className="italic font-light text-muted-foreground">Engineer</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-7 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          I design and ship scalable, high-performance mobile apps for brands like{" "}
          <span className="text-foreground">GNC</span>,{" "}
          <span className="text-foreground">Kalki</span>, and{" "}
          <span className="text-foreground">Bombay Shirt Company</span> — combining clean
          architecture with details that feel right.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a href="#projects" className="btn-primary group">
            View my work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#contact" className="btn-ghost">
            Get in touch
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-14 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md sm:mx-auto sm:max-w-xl"
        >
          {[
            { v: "3+", l: "Years experience" },
            { v: "15+", l: "Production apps" },
            { v: "~30%", l: "Avg. perf gain" },
          ].map((s) => (
            <div key={s.l} className="bg-background/40 px-3 py-4">
              <div className="font-display text-2xl font-bold gradient-text">{s.v}</div>
              <div className="mt-0.5 text-[11px] uppercase tracking-wider text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/15 p-1">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-foreground/60"
          />
        </div>
      </motion.div>
    </section>
  );
}
