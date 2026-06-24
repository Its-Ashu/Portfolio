import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  techStack: string[];
  image?: string;
  backgroundColor?: string;
  isLogo?: boolean;
  playStore?: string | null;
  appStore?: string | null;
};

export default function ProjectCard({ project }: { project: Project }) {
  const hasImage = !!project.image;
  const bg = project.backgroundColor
    ? { backgroundColor: project.backgroundColor }
    : {
        background:
          "linear-gradient(135deg, oklch(0.32 0.1 290), oklch(0.28 0.08 215))",
      };

  return (
    <Link to="/projects/$slug" params={{ slug: project.slug }} className="group block h-full">
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="gradient-border relative flex h-full flex-col overflow-hidden rounded-3xl"
      >
        <div
          className="relative flex h-56 items-center justify-center overflow-hidden"
          style={bg}
        >
          {/* shine sweep on hover */}
          <div className="pointer-events-none absolute inset-0 -translate-x-full opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100">
            <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
          </div>

          {(project.playStore || project.appStore) && (
            <div className="absolute right-3 top-3 z-10 flex gap-1.5">
              {project.playStore && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(project.playStore!, "_blank", "noopener,noreferrer");
                  }}
                  aria-label="Play Store"
                  className="grid h-7 w-7 place-items-center rounded-full bg-black/40 backdrop-blur-md ring-1 ring-white/15 hover:scale-110 transition"
                >
                  <img src="/Portfolio/android-icon-white.png" alt="" className="h-3.5 w-3.5" />
                </button>
              )}
              {project.appStore && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(project.appStore!, "_blank", "noopener,noreferrer");
                  }}
                  aria-label="App Store"
                  className="grid h-7 w-7 place-items-center rounded-full bg-black/40 backdrop-blur-md ring-1 ring-white/15 hover:scale-110 transition"
                >
                  <img src="/Portfolio/apple-icon-white.png" alt="" className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          )}

          {hasImage ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className={
                project.isLogo
                  ? "max-h-[55%] max-w-[55%] object-contain transition-transform duration-500 group-hover:scale-105"
                  : "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              }
            />
          ) : (
            <div className="font-display text-7xl font-bold text-white/80">
              {project.title.charAt(0)}
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
            <h3 className="truncate font-display text-lg font-semibold">{project.title}</h3>
            <span className={project.category === "client" ? "chip-primary" : "chip"}>
              {project.category === "client" ? "Client" : "Personal"}
            </span>
          </div>

          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
            {project.shortDescription}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 3).map((t) => (
              <span key={t} className="chip text-[11px]">
                {t}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="chip text-[11px]">+{project.techStack.length - 3}</span>
            )}
          </div>

          <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-[oklch(0.85_0.13_290)] transition-all group-hover:gap-2.5">
            View case study
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
