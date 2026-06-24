import { motion } from "framer-motion";

const groups = [
  {
    category: "Mobile & Frontend",
    icon: (
      <path d="M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2zm5 14h.01" />
    ),
    skills: [
      "React Native CLI / Expo",
      "Appmaker.xyz",
      "JavaScript",
      "TypeScript",
      "Redux Toolkit",
      "TanStack Query",
    ],
  },
  {
    category: "Backend & Data",
    icon: <path d="M4 7c0-1.66 3.58-3 8-3s8 1.34 8 3-3.58 3-8 3-8-1.34-8-3zm0 5c0 1.66 3.58 3 8 3s8-1.34 8-3m-16 5c0 1.66 3.58 3 8 3s8-1.34 8-3M4 7v10" />,
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Firebase", "Supabase"],
  },
  {
    category: "Payments & Integrations",
    icon: <path d="M3 10h18M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2zm2 10h4" />,
    skills: ["Stripe", "Razorpay", "GoKwik", "Zecpay", "Appsflyer", "GraphQL", "API Integration"],
  },
  {
    category: "Tools & Platforms",
    icon: <path d="M14.7 6.3a1 1 0 010 1.4L8.4 14a3 3 0 11-1.4-1.4l6.3-6.3a1 1 0 011.4 0zM17 3l2 2-2 2-2-2 2-2zM21 12l-2 2-2-2 2-2 2 2z" />,
    skills: ["Git / GitHub", "Shopify Dashboard", "Android Studio", "Xcode", "Postman", "Flipper", "Figma"],
  },
];

export default function Skills() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <div className="eyebrow mb-4">Skills</div>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              The toolkit I ship with
            </h2>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {groups.map((g, i) => (
            <motion.div
              key={g.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative gradient-border magnetic-hover overflow-hidden rounded-3xl p-7"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-40 blur-3xl transition-opacity group-hover:opacity-70"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.74 0.19 290 / 0.45), transparent 70%)",
                }}
              />
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.32_0.08_290)] to-[oklch(0.22_0.04_215)] text-[oklch(0.92_0.06_290)] ring-1 ring-white/10">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {g.icon}
                  </svg>
                </div>
                <h3 className="font-display text-lg font-semibold">{g.category}</h3>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {g.skills.map((s, idx) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.05 * idx }}
                    className="chip"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
