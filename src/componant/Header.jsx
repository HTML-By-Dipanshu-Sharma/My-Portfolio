import React, { useState } from "react";
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="navbar">
                <a href="#" className="logo">Portfolio</a>
                <div className={`menu-icon ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
            </nav>
        </>
    );
};

export default Header;

