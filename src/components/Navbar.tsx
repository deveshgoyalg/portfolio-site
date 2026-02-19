import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Video, Layers, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/', icon: <Video className="w-4 h-4" /> },
        { name: 'Portfolio', path: '/portfolio', icon: <Layers className="w-4 h-4" /> },
        { name: 'Presets', path: '/presets', icon: <Layers className="w-4 h-4" /> }, // Using Layers as placeholder
        { name: 'Contact', path: '/portfolio#contact', icon: <Mail className="w-4 h-4" /> },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-6 py-3 flex justify-between items-center shadow-lg">
                <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    DEVESH.
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`flex items-center gap-2 transition-colors duration-300 ${isActive(link.path) ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-6 right-6 md:hidden backdrop-blur-xl bg-slate-900/90 border border-white/10 rounded-2xl p-4 shadow-2xl"
                    >
                        <div className="flex flex-col gap-4">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${isActive(link.path) ? 'bg-white/10 text-blue-400' : 'text-gray-300 hover:bg-white/5'
                                        }`}
                                >
                                    {link.icon}
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
