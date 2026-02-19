import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'HOME', path: '/home' },
    { name: 'WORK', path: '/portfolio' },
    { name: 'ASSETS', path: '/presets' },
    { name: 'CONTACT', path: '/portfolio#contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-2 bg-acid-green z-50" />

      <nav className="fixed top-2 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/20">
        <div className="flex justify-between items-stretch h-16">
          <Link to="/home" className="flex items-center px-6 border-r border-white/20 hover:bg-white/5 transition-colors group">
            <span className="font-heading font-bold text-3xl tracking-tighter text-white group-hover:text-acid-green transition-colors">
              DEVESH<span className="text-acid-green">.</span>
            </span>
          </Link>

          <div className="hidden md:flex flex-1 justify-end">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center px-8 border-l border-white/20 font-mono text-sm tracking-wider hover:bg-white/5 hover:text-acid-green transition-all relative group ${
                  isActive(link.path) ? 'text-acid-green bg-white/5' : 'text-gray-400'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-acid-green transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden px-6 border-l border-white/20 text-white hover:bg-white/5 hover:text-acid-green transition-colors"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-b border-white/20 bg-black overflow-hidden"
            >
              <div className="flex flex-col">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-4 px-6 border-b border-white/10 font-mono text-sm tracking-widest hover:pl-8 transition-all ${
                      isActive(link.path) ? 'text-acid-green' : 'text-gray-300'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
