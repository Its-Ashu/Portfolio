import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import ResumeViewer from './pages/ResumeViewer'
import ScrollToTop from './pages/ScrollToTop'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : false // always false initially
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // Normalize BASE_URL for React Router (remove trailing slash, use '' for root)
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || ''

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/resume" element={<ResumeViewer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
