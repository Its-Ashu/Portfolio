import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: 'React Native Developer',
      company: 'Dynamic Dreamz',
      period: 'Aug 2024 - Current',
      description: [
        'Improved app performance and UI/UX across 8+ major e-commerce brands using Appmaker (React Native)',
        'Collaborated with cross-functional teams to deliver responsive and high-quality mobile apps',
        'Worked on brands including GNC India, Bellavita Organic, Voyage Eyewear, and Kalki Fashion',
        'Enhanced product filters, checkout flows, and app performance for better user experience',
      ],
    },
    {
      title: 'Full-stack Developer',
      company: 'Sarvagya Softtech',
      period: 'June 2023 - July 2024',
      description: [
        'Built full-stack mobile applications integrating React Native frontend with Node.js and MongoDB backend',
        'Designed user-friendly UI with optimized API performance and responsive layouts',
        'Developed and deployed production-ready applications for various clients',
        'Implemented RESTful APIs and database solutions for scalable mobile applications',
      ],
    },
  ]

  return (
    <section id="experience" className="section-container bg-gray-50 dark:bg-gray-800/50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="heading-2 mb-12 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border-l-4 border-primary-500"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    {exp.company}
                  </p>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 sm:mt-0">
                  {exp.period}
                </p>
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-gray-700 dark:text-gray-300 flex items-start"
                  >
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience

