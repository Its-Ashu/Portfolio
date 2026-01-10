import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="heading-2 mb-8 text-center">About Me</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I'm a React Native Developer with over 2.5 years of experience building high-performance
            mobile apps. I've developed 15+ projects, including well-known brands like GNC,
            Bellavita, BSC, and RENEE. Skilled in React Native, JavaScript, TypeScript, Redux,
            Firebase, and MERN, I focus on crafting clean designs, smooth user experiences, and
            reliable app functionality.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            My expertise spans full-stack mobile development, from building responsive UIs with
            React Native to developing scalable backend solutions with Node.js and MongoDB. I've
            worked across e-commerce, finance, and B2B domains, consistently delivering
            production-ready applications that improve app performance by up to 30%.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm passionate about creating seamless user experiences and have been recognized for
            clean UI implementation and efficient debugging. When I'm not coding, I'm constantly
            learning about new technologies and contributing to projects that make a positive impact
            on user's lives.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default About
