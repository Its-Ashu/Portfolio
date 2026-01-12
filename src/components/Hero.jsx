import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6 flex justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 p-1 shadow-lg overflow-hidden">
              <img
                src="/Portfolio/profile-photo.jpg"
                alt="Ashish Pipaliya"
                className="w-full h-full object-contain rounded-full"
                onError={e => {
                  // Fallback to initials if image fails to load
                  e.target.style.display = 'none'
                  const parent = e.target.parentElement
                  parent.innerHTML = `
                    <div class="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-4xl sm:text-5xl font-display font-bold text-primary-600 dark:text-primary-400">
                      AP
                    </div>
                  `
                }}
              />
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="heading-1 mb-4 bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent"
          >
            Ashish Pipaliya
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-medium"
          >
            Building high-performance mobile experiences with React Native
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            React Native Developer with over 2.5+ years of experience building high-performance
            mobile apps. I've developed 15+ projects, including well-known brands like GNC,
            Bellavita, Kalki, and BSC.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/resume" className="btn-primary">
              View Resume
            </Link>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
