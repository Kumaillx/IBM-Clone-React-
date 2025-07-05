import React, { useState } from 'react';
import '../index.css';
import ibmLogo from '../assets/IBM.png';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

return (
    <nav className="navbar">
        <div className="navbar-brand">
            <img
                src={ibmLogo}
                alt="IBM Logo"
                className="brand-logo"
                style={{ height: '32px' }}
            />
            <div className="navbar-divider"></div>
        </div>
        <div className="navbar-menu">
            <div className={`dropdown ${openDropdown === 'AI' ? 'open' : ''}`}>
                <a href="#" onClick={() => toggleDropdown('AI')}>
                    AI <span style={{fontSize: '18px'}}>▼</span>
                </a>
                <div className="dropdown-content">
                    <a href="#">AI Subitem 1</a>
                    <a href="#">AI Subitem 2</a>
                </div>
            </div>
            <div
                className={`dropdown ${openDropdown === 'Hybrid Cloud' ? 'open' : ''}`}
            >
                <a href="#" onClick={() => toggleDropdown('Hybrid Cloud')}>
                    Hybrid Cloud ▼
                </a>
                <div className="dropdown-content">
                    <a href="#">Hybrid Subitem 1</a>
                    <a href="#">Hybrid Subitem 2</a>
                </div>
            </div>
            <div className={`dropdown ${openDropdown === 'Products' ? 'open' : ''}`}>
                <a href="#" onClick={() => toggleDropdown('Products')}>
                    Products ▼
                </a>
                <div className="dropdown-content">
                    <a href="#">Products Subitem 1</a>
                    <a href="#">Products Subitem 2</a>
                </div>
            </div>
            <a href="#">Consulting</a>
            <div className={`dropdown ${openDropdown === 'Support' ? 'open' : ''}`}>
                <a href="#" onClick={() => toggleDropdown('Support')}>
                    Support ▼
                </a>
                <div className="dropdown-content">
                    <a href="#">Support Subitem 1</a>
                    <a href="#">Support Subitem 2</a>
                </div>
            </div>
            <a href="#">Think</a>
        </div>
        <div className="navbar-icons">
            <span className="icon">{/* Replace with SVG icon */} <svg width="20" height="20" fill="none" stroke="#393939" strokeWidth="2"><circle cx="9" cy="9" r="7"/><line x1="15" y1="15" x2="19" y2="19"/></svg> </span>
            <span className="icon">💬</span>
            <span className="icon">🌐</span>
            <span className="icon">👤</span>
        </div>
    </nav>
);
};

export default Navbar;