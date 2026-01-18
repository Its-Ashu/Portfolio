import { motion } from 'framer-motion'

const Education = () => {
  return (
    <section id="education" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* Heading */}
        <h2 className="heading-2 mb-12 text-center">Education</h2>

        {/* Education Card */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border-l-4 border-primary-500">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Bachelor of Technology (B.Tech) – Information Technology
              </h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium">
                Bhagwan Arihant Institute of Technology
              </p>
            </div>

            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 sm:mt-0">
              Aug 2021 – Apr 2025
            </p>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            Completed a well-structured undergraduate program in Information Technology, where I
            learned both core and advanced IT concepts. My studies focused on application
            development, programming fundamentals, software engineering, and IT system design. Along
            with theoretical knowledge, I gained hands-on experience by working on real-world
            projects, which helped me understand modern development practices and improve my
            problem-solving skills.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default Education
