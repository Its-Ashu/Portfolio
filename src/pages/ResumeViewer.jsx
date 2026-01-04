import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ResumeViewer = () => {
  // Use BASE_URL for GitHub Pages compatibility
  const resumePath = `${import.meta.env.BASE_URL}AshishPipaliya_ReactNativeDev_Resume.pdf`

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with back button and download */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <Link
            to="/"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>
          <a
            href={resumePath}
            download="AshishPipaliya_Resume.pdf"
            className="btn-primary inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Resume
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <iframe
            src={`${resumePath}#toolbar=1&navpanes=1&scrollbar=1`}
            title="Ashish Pipaliya Resume"
            className="w-full h-[calc(100vh-200px)] min-h-[800px] border-0"
            style={{ minHeight: '800px' }}
          />
        </div>

        {/* Fallback message for browsers that don't support PDF viewing */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Having trouble viewing the resume?{' '}
            <a
              href={resumePath}
              download="AshishPipaliya_Resume.pdf"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              Download it directly
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default ResumeViewer
