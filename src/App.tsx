import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/next';
import Navbar from './components/navbar';
import Bienvenida from './components/bienvenida';
import Challenges from './pages/challenges';
import Only from './pages/only';
import { motion } from 'framer-motion';
import Contenido from './pages/contenido';
function App() {


  return (
    <>                                                  
      <Router>
        <MainContent/>
        <Analytics />
      </Router>
    </>
  )
}

const MainContent: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <Navbar/>
      {location.pathname === '/' && <Bienvenida />}
      <Routes>
        <Route path="/challenges" element={ <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Challenges /></motion.div>} />
        <Route path="/contenido" element={<motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }}><Contenido /></motion.div>} />
         <Route path="/only" element={<motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }}><Only /></motion.div>} />
      </Routes>
    </>
  )
}
export default App
