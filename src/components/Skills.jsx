import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        'React',
        'React Native',
        'JavaScript',
        'TypeScript',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'Redux',
        'Material-UI',
      ],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'REST API', 'JWT', 'Socket.io', 'Firebase'],
    },
    {
      category: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'Figma', 'Vite', 'Webpack', 'AWS S3', 'Postman'],
    },
    {
      category: 'Integrations',
      skills: ['Stripe', 'Razorpay', 'GoKwik', 'Zecpay', 'Appmaker', 'Chart.js'],
    },
  ]

  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="heading-2 mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
