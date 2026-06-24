import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16"
        >
          <div>
            <div className="eyebrow mb-5">About</div>
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              Engineer who cares about the <span className="gradient-text">details</span>.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              I&apos;m a <span className="text-foreground font-medium">React Native developer</span>{" "}
              with <span className="text-foreground">3 years</span> of hands-on experience
              shipping production mobile applications used by real customers every day.
            </p>
            <p>
              I specialize in{" "}
              <span className="text-foreground">React Native, TypeScript, Redux, Firebase</span>{" "}
              and the MERN stack — focusing on clean architecture, reusable components, and the
              tiny interactions that make an app feel premium. I&apos;ve delivered{" "}
              <span className="text-foreground">15+ apps</span> across e-commerce, finance, and
              B2B, including <span className="text-foreground">GNC, Bellavita, Kalki</span> and{" "}
              <span className="text-foreground">Bombay Shirt Company</span>.
            </p>
            <p>
              From crafting responsive UIs to integrating scalable backends, I deliver
              production-ready apps with measurable impact — including performance improvements
              of up to <span className="text-foreground">30%</span>. Currently open to full-time
              React Native roles and product-minded teams.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "React Native",
                "TypeScript",
                "Redux Toolkit",
                "Firebase",
                "REST / GraphQL",
                "MERN",
                "iOS · Android",
              ].map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
