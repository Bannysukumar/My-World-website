import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../App.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (e, sectionId) => {
        if (location.pathname !== '/') {
            return; // Let React Router handle navigation
        }
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav-content">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="My World Logo" className="logo-img" />
                            <h1>My World</h1>
                        </Link>
                    </div>
                    <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                        <li>
                            <Link to="/" onClick={(e) => scrollToSection(e, 'home')}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/" onClick={(e) => scrollToSection(e, 'features')}>
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link to="/" onClick={(e) => scrollToSection(e, 'screenshots')}>
                                Screenshots
                            </Link>
                        </li>
                        <li>
                            <Link to="/" onClick={(e) => scrollToSection(e, 'about')}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/" onClick={(e) => scrollToSection(e, 'download')}>
                                Download
                            </Link>
                        </li>
                    </ul>
                    <div className="hamburger" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

