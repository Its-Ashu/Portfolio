import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
// @ts-expect-error - JS data module
import { projects } from "../data/projects";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "client", label: "Client" },
  { id: "personal", label: "Personal" },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

export default function ProjectsGrid() {
  const [filter, setFilter] = useState<FilterId>("all");
  const filtered =
    filter === "all" ? projects : projects.filter((p: any) => p.category === filter);

  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="eyebrow mb-4">Selected work</div>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl md:text-5xl">
              Apps people <span className="gradient-text">actually use</span>.
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              A selection of shipped mobile applications — from large e-commerce brands to
              focused product work.
            </p>
          </div>

          <div className="glass inline-flex rounded-full p-1">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  filter === f.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {filter === f.id && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-[oklch(0.32_0.1_290)] to-[oklch(0.22_0.06_215)] ring-1 ring-white/15"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative">{f.label}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p: any, i: number) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.3) }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
