import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Presets from './pages/Presets';

function App() {
    return (
        <Router basename="/portfolio-site">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/presets" element={<Presets />} />
            </Routes>
            <footer className="footer">
                <div className="container">
                    <div className="footer__inner">
                        <div className="footer__logo">devesh<span>.</span></div>
                        <div className="footer__text">© 2024 Devesh. All rights reserved.</div>
                    </div>
                </div>
            </footer>
        </Router>
    );
}

export default App;
