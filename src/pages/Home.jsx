import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import ProjectsGrid from '../components/ProjectsGrid'
import Contact from '../components/Contact'
import Education from '../components/Education'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <ProjectsGrid />
      <Contact />
    </>
  )
}

export default Home
