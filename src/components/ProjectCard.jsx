import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.slug}`}>
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
      >
        <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
          <div className="text-6xl font-display font-bold text-white opacity-80">
            {project.title.charAt(0)}
          </div>
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
            {project.shortDescription}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 3).map(tech => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
          <div className="text-primary-600 dark:text-primary-400 font-medium text-sm flex items-center">
            View Details
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default ProjectCard
