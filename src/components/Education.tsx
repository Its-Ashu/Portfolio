import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="section-pad">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="eyebrow mb-4">Education</div>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Foundation</h2>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="gradient-border magnetic-hover rounded-3xl p-7 sm:p-9"
        >
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:items-end sm:justify-between">
            <div className="min-w-0">
              <h3 className="font-display text-xl font-semibold sm:text-2xl">
                B.Tech — Information Technology
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Bhagwan Arihant Institute of Technology
              </p>
            </div>
            <span className="chip shrink-0">Aug 2021 – Apr 2025</span>
          </div>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            A well-structured undergraduate program covering core and advanced IT concepts —
            application development, programming fundamentals, software engineering, and system
            design — paired with hands-on, real-world project work.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
