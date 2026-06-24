import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
// @ts-expect-error - JS data
import { projects } from "../data/projects";

type Project = {
  slug: string;
  title: string;
  date: string;
  role: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  techStack: string[];
  highlights?: string[];
  problem?: string;
  approach?: string[];
  result?: string[];
  image?: string;
  backgroundColor?: string;
  isLogo?: boolean;
  screenshots?: string[];
  githubUrl?: string | null;
  liveUrl?: string | null;
  playStore?: string | null;
  appStore?: string | null;
};

function findProject(slug: string): Project | undefined {
  return (projects as Project[]).find((p) => p.slug === slug);
}

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = findProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    return {
      meta: [
        { title: p ? `${p.title} — Case Study · Ashish Pipaliya` : "Project" },
        { name: "description", content: p?.shortDescription ?? "" },
        { property: "og:title", content: p?.title ?? "Project" },
        { property: "og:description", content: p?.shortDescription ?? "" },
        ...(p?.image ? [{ property: "og:image", content: p.image }] : []),
        ...(p?.image ? [{ name: "twitter:image", content: p.image }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="grid min-h-[60vh] place-items-center px-4 pt-32">
      <div className="text-center">
        <h1 className="font-display text-3xl font-semibold">Project not found</h1>
        <Link to="/" className="btn-primary mt-6 inline-flex">Back home</Link>
      </div>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const router = useRouter();
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (!project.screenshots) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i! + 1) % project.screenshots!.length);
      if (e.key === "ArrowLeft")
        setLightbox((i) => (i! - 1 + project.screenshots!.length) % project.screenshots!.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, project.screenshots]);

  const backToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    router.navigate({ to: "/" }).then(() => {
      setTimeout(() => {
        document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    });
  };

  const bg = project.backgroundColor
    ? { backgroundColor: project.backgroundColor }
    : {
        background:
          "linear-gradient(135deg, oklch(0.32 0.1 290), oklch(0.28 0.08 215))",
      };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-28"
    >
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <button
          onClick={backToProjects}
          className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:-translate-x-0.5"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Back to projects
        </button>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="gradient-border mt-8 overflow-hidden rounded-[2rem]"
        >
          <div
            className="relative flex h-72 items-center justify-center overflow-hidden sm:h-96"
            style={bg}
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className={
                  project.isLogo
                    ? "max-h-[55%] max-w-[55%] object-contain"
                    : "h-full w-full object-cover"
                }
              />
            )}
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-10"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip-primary">
              {project.category === "client" ? "Client work" : "Personal project"}
            </span>
            <span className="chip">{project.date}</span>
            <span className="chip">{project.role}</span>
          </div>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {project.longDescription}
          </p>
        </motion.div>

        {/* Tech */}
        <Section delay={0.2} title="Tech Stack">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((t: string) => (
              <span key={t} className="chip-primary">{t}</span>
            ))}
          </div>
        </Section>

        {project.problem && (
          <Section delay={0.25} title="Problem">
            <p className="text-lg leading-relaxed text-muted-foreground">{project.problem}</p>
          </Section>
        )}

        {project.approach && (
          <Section delay={0.3} title="Approach">
            <BulletList items={project.approach} />
          </Section>
        )}

        {project.result && (
          <Section delay={0.35} title="Result">
            <BulletList items={project.result} />
          </Section>
        )}

        {(project.playStore || project.appStore) && (
          <Section delay={0.4} title="Download">
            <div className="flex flex-wrap gap-3">
              {project.playStore && (
                <a
                  href={project.playStore}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  <img src="/Portfolio/android-icon-white.png" alt="" className="h-4 w-4" />
                  Play Store
                </a>
              )}
              {project.appStore && (
                <a
                  href={project.appStore}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  <img src="/Portfolio/apple-icon-white.png" alt="" className="h-4 w-4" />
                  App Store
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary">
                  Open live demo
                </a>
              )}
              {project.githubUrl && project.category === "personal" && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-ghost">
                  View on GitHub
                </a>
              )}
            </div>
          </Section>
        )}

        {project.screenshots && project.screenshots.length > 0 && (
          <Section delay={0.45} title="Screens">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {project.screenshots.map((src: string, i: number) => (
                <motion.button
                  key={src + i}
                  whileHover={{ y: -4 }}
                  onClick={() => setLightbox(i)}
                  className="gradient-border group overflow-hidden rounded-2xl"
                >
                  <div className="aspect-[9/16] overflow-hidden bg-black/30">
                    <img
                      src={src}
                      alt={`Screenshot ${i + 1}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </motion.button>
              ))}
            </div>
          </Section>
        )}
      </div>

      <AnimatePresence>
        {lightbox !== null && project.screenshots && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-black/85 p-4 backdrop-blur-md"
            onClick={() => setLightbox(null)}
          >
            <button
              aria-label="Close"
              onClick={() => setLightbox(null)}
              className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20"
            >
              ✕
            </button>
            <button
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(
                  (lightbox! - 1 + project.screenshots!.length) % project.screenshots!.length,
                );
              }}
              className="absolute left-5 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white text-2xl ring-1 ring-white/20 hover:bg-white/20"
            >
              ‹
            </button>
            <motion.img
              key={lightbox}
              src={project.screenshots[lightbox]}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-h-[88vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((lightbox! + 1) % project.screenshots!.length);
              }}
              className="absolute right-5 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white text-2xl ring-1 ring-white/20 hover:bg-white/20"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Section({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay }}
      className="mt-12"
    >
      <h2 className="mb-5 font-display text-sm font-medium uppercase tracking-widest text-[oklch(0.85_0.13_290)]">
        {title}
      </h2>
      {children}
    </motion.section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3 text-[15px] leading-relaxed text-muted-foreground sm:text-base"
        >
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-[oklch(0.85_0.16_290)] to-[oklch(0.78_0.16_215)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
