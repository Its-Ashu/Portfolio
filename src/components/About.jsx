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

        <div className="space-y-6">
          {/* Who I Am */}
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m a{' '}
            <span className="font-medium text-primary-600 dark:text-primary-400">
              React Native Developer
            </span>{' '}
            with 3 years of hands-on experience building scalable, high-performance mobile
            applications for real-world use.
          </p>

          {/* What I Do */}
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I specialize in{' '}
            <strong>React Native, JavaScript, TypeScript, Redux, Firebase, and MERN</strong>,
            focusing on clean architecture, reusable components, and smooth user experiences. I’ve
            worked on 15+ projects across e-commerce, finance, and B2B domains, including brands
            like <strong>GNC, Bellavita, Kalki, and Bombay Shirt Company</strong>.
          </p>

          {/* What Makes Me Valuable */}
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            From crafting responsive UIs to integrating scalable backends, I deliver
            production-ready apps with measurable impact — including performance improvements of up
            to <strong>30%</strong>. I’m known for clean UI implementation, efficient debugging, and
            a strong attention to detail.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Currently open to full-time React Native roles and exciting product teams.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default About
