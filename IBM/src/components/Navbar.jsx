import React, { useState } from 'react';
import '../index.css';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-logo">IBM</span>
      </div>
      <div className="navbar-menu">
        <div className={`dropdown ${openDropdown === 'AI' ? 'open' : ''}`}>
          <a href="#" onClick={() => toggleDropdown('AI')}>
            AI ▼
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
        <span className="icon">🔍</span>
        <span className="icon">💬</span>
        <span className="icon">🌐</span>
        <span className="icon">👤</span>
      </div>
    </nav>
  );
};

export default Navbar;