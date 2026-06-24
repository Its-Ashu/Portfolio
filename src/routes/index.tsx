import { createFileRoute } from "@tanstack/react-router";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import ProjectsGrid from "../components/ProjectsGrid";
import Contact from "../components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ashish Pipaliya — React Native Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Ashish Pipaliya, React Native engineer building scalable, high-performance mobile apps for production e-commerce brands.",
      },
      { property: "og:title", content: "Ashish Pipaliya — React Native Engineer" },
      {
        property: "og:description",
        content:
          "Portfolio: 15+ shipped mobile apps. React Native, TypeScript, Redux, Firebase, MERN.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <ProjectsGrid />
      <Contact />
    </>
  );
}
