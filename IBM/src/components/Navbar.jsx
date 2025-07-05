import React, { useState } from 'react';
import '../index.css';
import ibmLogo from '../assets/IBM.png';
import searchIcon from '../assets/Search-Icon.png';
import MsgIcon from '../assets/Msg-Icon.png';
import WebIcon from '../assets/Web-Icon.png';
import UserIcon from '../assets/User-Icon.png';

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
            <span className="icon">
                <img
                src={searchIcon}
                alt="Search"
                className="search-icon"
                style={{ width: '20px', height: '20px' }}
                onClick={() => toggleDropdown('Search')}
                />
            </span>
            <span className="icon">
                <img
                    src={MsgIcon}
                    alt="Message"
                    style={{ width: '20px', height: '20px' }}
                />
            </span>
            <span className="icon">
                <img
                    src={WebIcon}
                    alt="Web"
                    style={{ width: '20px', height: '20px' }}
                />
            </span>
            <span className="icon">
                <img
                    src={UserIcon}
                    alt="User"
                    style={{ width: '20px', height: '20px' }}
                />
            </span>
        </div>
    </nav>
);
};

export default Navbar;