import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

const resumePath = "/Portfolio/AshishPipaliya_ReactNative_Resume.pdf";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Ashish Pipaliya" },
      { name: "description", content: "Resume of Ashish Pipaliya, React Native engineer." },
    ],
  }),
  component: Resume,
});

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-28 pb-12"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <Link to="/" className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:-translate-x-0.5"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back home
          </Link>
          <a href={resumePath} download className="btn-primary">
            Download PDF
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>

        <div className="gradient-border mt-8 overflow-hidden rounded-3xl bg-black/30">
          <object data={resumePath} type="application/pdf" className="h-[80vh] w-full">
            <iframe src={resumePath} className="h-[80vh] w-full" title="Resume PDF" />
          </object>
        </div>
      </div>
    </motion.div>
  );
}
