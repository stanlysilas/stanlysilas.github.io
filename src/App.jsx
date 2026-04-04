import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CursorGlow from './components/effects/CursorGlow'

export default function App() {
  return (
    <BrowserRouter>
      <CursorGlow />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}