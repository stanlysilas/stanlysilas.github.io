import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from "react";
import useSmoothScroll from './hooks/useSmoothScroll'

import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import ProjectDetail from './pages/ProjectDetail/ProjectDetail'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Cursor from './components/effects/Cursor'

function AnimatedRoutes() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    const redirect = sessionStorage.redirect
    if (redirect) {
      sessionStorage.removeItem('redirect')
      window.history.replaceState(null, '', redirect)
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  useSmoothScroll()

  return (
    <BrowserRouter>
      <Cursor />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  )
}