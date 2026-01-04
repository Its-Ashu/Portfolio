import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { useEffect, useState } from 'react'

const ProjectDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.slug === slug)

  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = index => {
    setCurrentIndex(index)
    setIsOpen(true)
  }

  const closeLightbox = () => setIsOpen(false)

  const nextImage = () => setCurrentIndex((currentIndex + 1) % project.screenshots.length)

  const prevImage = () =>
    setCurrentIndex((currentIndex - 1 + project.screenshots.length) % project.screenshots.length)

  useEffect(() => {
    if (!project) {
      navigate('/')
    }
  }, [project, navigate])

  if (!project) {
    return null
  }

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-16 min-h-screen"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Projects
        </Link>

        {/* Hero Image/Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          {(() => {
            const backgroundColor = project.backgroundColor || null
            const isLogo = project.isLogo || false
            const backgroundStyle = backgroundColor
              ? { backgroundColor }
              : {
                  background:
                    'linear-gradient(to bottom right, rgb(56, 189, 248), rgb(37, 99, 235))',
                }

            return (
              <div
                className="h-64 sm:h-96 rounded-lg flex items-center justify-center shadow-lg overflow-hidden"
                style={backgroundStyle}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className={
                      isLogo
                        ? 'max-w-[50%] max-h-[50%] object-contain'
                        : 'w-full h-full object-cover'
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
                        <div class="text-8xl sm:text-9xl font-display font-bold text-white opacity-80">
                          ${project.title.charAt(0)}
                        </div>
                      `
                    }}
                  />
                ) : (
                  <div className="text-8xl sm:text-9xl font-display font-bold text-white opacity-80">
                    {project.title.charAt(0)}
                  </div>
                )}
              </div>
            )
          })()}
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="heading-2 mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">{project.longDescription}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {project.date}
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {project.role}
            </span>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h3 className="heading-3 mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map(tech => (
              <span
                key={tech}
                className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Problem */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <h3 className="heading-3 mb-4 text-primary-600 dark:text-primary-400">Problem</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.problem}
          </p>
        </motion.section>

        {/* Approach */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <h3 className="heading-3 mb-4 text-primary-600 dark:text-primary-400">Approach</h3>
          <ul className="space-y-3">
            {project.approach.map((item, index) => (
              <li key={index} className="flex items-start text-lg text-gray-700 dark:text-gray-300">
                <span className="text-primary-500 mr-3 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Result */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <h3 className="heading-3 mb-4 text-primary-600 dark:text-primary-400">Result</h3>
          <ul className="space-y-3">
            {project.result.map((item, index) => (
              <li key={index} className="flex items-start text-lg text-gray-700 dark:text-gray-300">
                <span className="text-primary-500 mr-3 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Screenshots */}
        {project?.screenshots && project?.screenshots?.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h3 className="heading-3 mb-6 text-primary-600 dark:text-primary-400">
              App Screenshots
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {project.screenshots.map((src, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-lg overflow-hidden shadow-md bg-gray-100 dark:bg-gray-800"
                >
                  <img
                    src={src}
                    alt={`Screenshot ${index + 1}`}
                    className="w-50 h-50 object-contain cursor-pointer"
                    onClick={() => openLightbox(index)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-12"
        >
          {/* Only show GitHub link for personal projects */}
          {project.githubUrl && project.category === 'personal' && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              View on GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Open Live Demo
            </a>
          )}
        </motion.div>
      </div>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Close */}
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-white text-3xl">
            ✕
          </button>

          {/* Previous */}
          <button onClick={prevImage} className="absolute left-6 text-white text-4xl">
            ‹
          </button>

          {/* Image */}
          <motion.img
            key={currentIndex}
            src={project.screenshots[currentIndex]}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.x < -100) nextImage()
              if (info.offset.x > 100) prevImage()
            }}
          />

          {/* Next */}
          <button onClick={nextImage} className="absolute right-6 text-white text-4xl">
            ›
          </button>
        </motion.div>
      )}
    </motion.div>
  )
}

export default ProjectDetail
