import { useState, useRef, useEffect } from 'react';
import '../index.css';
import ibmLogo from '../assets/IBM.png';
import searchIcon from '../assets/Search-Icon.png';
import MsgIcon from '../assets/Msg-Icon.png';
import WebIcon from '../assets/Web-Icon.png';
import UserIcon from '../assets/User-Icon.png';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const navbarRef = useRef(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpenDropdown(null);
        setShowLanguageMenu(false);
      }
    };
    if (openDropdown || showLanguageMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown, showLanguageMenu]);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
  ];

  const dropdownItems = {
    AI: [
      'Overview', 'Consulting', 'Research',
      'watsonx', 'Agents', 'Ethics and governance',
    ],
    'Hybrid Cloud': [
      'Overview', 'Consulting', 'Cloud platform',
      'IT infrastructure', 'Quantum computing', 'Research',
    ],
    Products: [
      'Featured', 'AI & Machine Learning', 'Analytics',
      'Automation', 'Containers', 'Databases',
      'DevOps', 'Middleware', 'Security & Identity',
    ],
    Support: [
      'What’s New', 'Community', 'Documentation',
      'Developer', 'Support', 'Training',
    ]
  };

  const renderDropdown = (type) => (
    <div className="dropdown-content">
      {dropdownItems[type].map((item, index) => (
        <a href="#" key={index}>{item}</a>
      ))}
    </div>
  );

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-brand">
        <img src={ibmLogo} alt="IBM Logo" className="brand-logo" />
        <div className="navbar-divider"></div>
      </div>
      <div className="navbar-menu">
        {Object.keys(dropdownItems).map((title) => (
          <div
            key={title}
            className={`dropdown ${openDropdown === title ? 'open' : ''}`}
          >
            <a href="#" onClick={() => toggleDropdown(title)}>
              {title}
              <span className="dropdown-caret">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 8l5 5 5-5" stroke="#393939" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
            {openDropdown === title && renderDropdown(title)}
          </div>
        ))}
        <a href="#">Consulting</a>
        <a href="#">Think</a>
      </div>

      <div className="navbar-icons">
        <span className="icon" onClick={() => setShowSearchBar(true)}>
          <img src={searchIcon} alt="Search" />
        </span>
        <span className="icon"><img src={MsgIcon} alt="Messages" /></span>
        <span className="icon" onClick={() => setShowLanguageMenu(!showLanguageMenu)}>
          <img src={WebIcon} alt="Language" />
          {showLanguageMenu && (
            <div className="language-menu">
              {languages.map((lang, i) => (
                <a key={i} href="#" onClick={(e) => {
                  e.preventDefault();
                  alert(`Switched to ${lang.name}`);
                  setShowLanguageMenu(false);
                }}>{lang.name}</a>
              ))}
            </div>
          )}
        </span>
        <span className="icon"><img src={UserIcon} alt="User" /></span>
      </div>

      {showSearchBar && (
        <div className="search-bar-container">
          <input type="text" className="search-bar" placeholder="Search all of IBM" autoFocus />
          <span className="search-icon-span">
            <svg width="24" height="24" fill="none" stroke="#393939" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </span>
          <button onClick={() => setShowSearchBar(false)} aria-label="Close search">✕</button>
          <div className="search-bar-underline" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
