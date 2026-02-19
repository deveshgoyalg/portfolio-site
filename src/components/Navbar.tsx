import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Work', path: '/portfolio' },
        { name: 'Assets', path: '/presets' },
    ];

    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar__logo">
                    devesh<span>.</span>
                </Link>

                <div className="navbar__links">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <Link to="/portfolio#contact" className="navbar__cta">
                    Let's Talk
                </Link>

                <button
                    className="navbar__hamburger"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>

            <div className={`mobile-nav ${isOpen ? 'mobile-nav--open' : ''}`}>
                {links.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        className="mobile-nav__link"
                        onClick={() => setIsOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
                <Link
                    to="/portfolio#contact"
                    className="mobile-nav__link"
                    onClick={() => setIsOpen(false)}
                >
                    Contact
                </Link>
            </div>
        </>
    );
};

export default Navbar;
