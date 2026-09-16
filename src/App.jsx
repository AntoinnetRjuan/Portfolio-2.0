import './App.css'
import Menu from './components/Menu.jsx'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './components/Home.jsx'
import AboutMe from './components/AboutMe.jsx'
import MyCompetence from './components/MyCompetence.jsx'
import MyProjects from './components/MyProjects.jsx'
import ContactMe from './components/ContactMe.jsx'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.25 } },
}

function PageWrapper({ children }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  )
}

function App() {
  const location = useLocation()
  const showMenu = location.pathname !== '/'

  return (
    <>
      {showMenu && <Menu />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><AboutMe /></PageWrapper>} />
          <Route path="/skills" element={<PageWrapper><MyCompetence /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><MyProjects /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><ContactMe /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
