import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        'React Native CLI/Expo',
        'Appmaker.xyz',
        'Javascript',
        'TypeScript',
        'Redux',
        'Redux toolkit',
        'TanStack Query',
      ],
    },
    {
      category: 'Backend & DB',
      skills: ['Node.js', 'Express.js', 'Mongo DB', 'RESTful APIs', 'Firebase', 'Supabase'],
    },
    {
      category: 'Payments & Integrations',
      skills: [
        'Stripe',
        'Razorpay',
        'Zecpay',
        'GoKwik',
        'Appsflyer',
        'API Integration',
        'GraphQL Queries',
      ],
    },
    {
      category: 'Tools & Platforms',
      skills: [
        'Git-Github',
        'Shopify Dashboard',
        'Android Studio',
        'Xcode',
        'Postman',
        'Flipper',
        'Figma',
        'Adobe XD',
      ],
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
