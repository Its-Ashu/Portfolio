import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: 'React Native Developer',
      company: 'Dynamic Dreamz : A Shopify & Wordpress Web Development Agency',
      period: 'Aug 2024 – Present',
      description: [
        'Built and customized production-grade mobile applications using Appmaker.xyz, a React Native–based framework, for large-scale e-commerce brands',
        'Delivered and maintained 13+ production mobile apps used by real customers across multiple domains',
        'Implemented end-to-end e-commerce flows including product listings, advanced filtering, cart management, checkout, and payment integrations',
        'Improved app performance and stability by up to ~30% through optimized rendering, API handling, and bug fixes',
        'Integrated third-party SDKs and services such as GoKwik and Zecpay to enhance payments and user experience',
        'Collaborated closely with design, backend, and QA teams to ship scalable, high-quality releases on tight timelines',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Sarvagya Softtech',
      period: 'June 2023 – July 2024',
      description: [
        'Worked as a Full Stack Developer on real client and internal projects across mobile and web platforms',
        'Developed React Native applications with RESTful API integration and focus on clean UI/UX',
        'Built and maintained backend services using Node.js, Express, and MongoDB for authentication, data management, and business logic',
        'Designed responsive and user-friendly interfaces using Figma, translating designs into functional components',
        'Gained hands-on experience with Git-based version control, debugging, API integration, and end-to-end feature development',
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
                    <span className="text-primary-500 mr-2">•</span>
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
