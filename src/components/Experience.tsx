import { motion } from "framer-motion";

const experiences = [
  {
    title: "React Native Developer",
    company: "Dynamic Dreamz",
    sub: "Shopify & Wordpress Web Development Agency",
    period: "Aug 2024 – Present",
    bullets: [
      "Built and customized production-grade mobile applications using Appmaker.xyz (React Native–based) for large-scale e-commerce brands.",
      "Delivered and maintained 13+ production mobile apps used by real customers across multiple domains.",
      "Implemented end-to-end e-commerce flows: PLP, advanced filtering, cart, checkout, and payment integrations.",
      "Improved app performance and stability by up to ~30% via optimized rendering, API handling, and bug fixes.",
      "Integrated third-party SDKs and services like GoKwik and Zecpay to enhance payments and UX.",
      "Collaborated closely with design, backend, and QA teams to ship scalable, high-quality releases on tight timelines.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Sarvagya Softtech",
    sub: "Software Development Company",
    period: "Jun 2023 – Jul 2024",
    bullets: [
      "Worked as a Full Stack Developer on real client and internal projects across mobile and web platforms.",
      "Developed React Native applications with RESTful API integration and a clean UI/UX focus.",
      "Built and maintained backend services using Node.js, Express, and MongoDB.",
      "Contributed to MERN-stack feature work, debugging, and end-to-end delivery.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <div className="eyebrow mb-4">Experience</div>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Where I&apos;ve been
            </h2>
          </div>
        </div>

        <div className="relative">
          {/* timeline rail */}
          <div className="absolute left-3 top-2 bottom-2 hidden w-px bg-gradient-to-b from-[oklch(0.74_0.19_290/0.5)] via-white/10 to-transparent sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.article
                key={exp.title + exp.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative sm:pl-12"
              >
                <span className="absolute left-0 top-7 hidden h-6 w-6 rounded-full border border-[oklch(0.74_0.19_290/0.5)] bg-background sm:grid sm:place-items-center">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[oklch(0.85_0.16_290)] to-[oklch(0.78_0.16_215)] shadow-[0_0_12px_oklch(0.74_0.19_290/0.8)]" />
                </span>

                <div className="gradient-border rounded-3xl p-6 sm:p-8">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:items-end sm:justify-between">
                    <div className="min-w-0">
                      <h3 className="font-display text-xl font-semibold sm:text-2xl">
                        {exp.title}
                      </h3>
                      <p className="mt-1 text-sm">
                        <span className="text-foreground">{exp.company}</span>{" "}
                        <span className="text-muted-foreground">· {exp.sub}</span>
                      </p>
                    </div>
                    <span className="chip-primary shrink-0">{exp.period}</span>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {exp.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[oklch(0.78_0.16_215)]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
