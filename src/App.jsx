import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import AboutMe from './components/AboutMe.jsx'
import MyCompetence from './components/MyCompetence.jsx'
import MyProjects from './components/MyProjects.jsx'
import ContactMe from './components/ContactMe.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<MyCompetence />} />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </>
  )
}

export default App
