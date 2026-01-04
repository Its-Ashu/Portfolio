import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ProjectCard = ({ project }) => {
  // Use project image or fallback to gradient with first letter
  const hasImage = project.image
  const backgroundColor = project.backgroundColor ?? null
  const isLogo = project.isLogo ?? false

  // Determine background style
  const backgroundStyle = backgroundColor
    ? { backgroundColor }
    : {
        background: 'linear-gradient(to bottom right, rgb(56, 189, 248), rgb(37, 99, 235))',
      }

  return (
    <Link to={`/projects/${project.slug}`}>
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
      >
        <div
          className="h-48 flex items-center justify-center overflow-hidden"
          style={backgroundStyle}
        >
          {hasImage ? (
            <img
              src={project.image}
              alt={project.title}
              className={
                isLogo ? 'max-w-[50%] max-h-[50%] object-contain' : 'w-full h-full object-contain'
              }
              loading="lazy"
              onError={e => {
                // Fallback to gradient if image fails to load
                e.target.style.display = 'none'
                const parent = e.target.parentElement
                if (!backgroundColor) {
                  parent.style.background =
                    'linear-gradient(to bottom right, rgb(56, 189, 248), rgb(37, 99, 235))'
                }
                parent.innerHTML = `
                  <div class="text-6xl font-display font-bold text-white opacity-80">
                    ${project.title.charAt(0)}
                  </div>
                `
              }}
            />
          ) : (
            <div className="text-6xl font-display font-bold text-white opacity-80">
              {project.title.charAt(0)}
            </div>
          )}
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
            {project.category === 'client' && (
              <span className="px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded">
                Client
              </span>
            )}
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow text-sm">
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
