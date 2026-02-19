import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Presets from './pages/Presets';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/presets" element={<Presets />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-slate-900 min-h-screen text-slate-50 font-sans selection:bg-blue-500/30">
        <Navbar />
        <AnimatedRoutes />

        <footer className="py-8 text-center text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} Devesh. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
