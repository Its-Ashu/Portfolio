import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: 'React Native Developer',
      company: 'Dynamic Dreamz',
      period: 'Aug 2024 – Present',
      description: [
        'Working on Appmaker (React Native–based framework) to build and customize mobile applications for multiple large-scale e-commerce brands',
        'Improved UI/UX, performance, and stability across 13+ production mobile apps',
        'Implemented features such as product listing, advanced filters, cart, checkout flows, and payment integrations',
        'Worked on brands including GNC India, Bellavita Organic, Bombay Shirt Company, and Kalki Fashion',
        'Integrated third-party services and SDKs such as GoKwik and Zecpay',
        'Collaborated with designers, backend teams, and QA to deliver high-quality releases',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Sarvagya Softtech',
      period: 'June 2023 – July 2024',
      description: [
        'Worked as a Full Stack Developer on real client and internal projects over a continuous 14-month period',
        'Developed mobile applications using React Native with RESTful APIs',
        'Built backend services using Node.js, Express, and MongoDB for authentication, data handling, and business logic',
        'Designed and implemented clean, responsive UI/UX using Figma and modern frontend practices',
        'Gained hands-on experience with Git-based version control, debugging, and API integration.',
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
                  <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
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
