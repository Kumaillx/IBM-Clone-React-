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

  // Close dropdown/language menu when clicking outside
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

  // Define language options
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
  ];

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-brand">
        <img src={ibmLogo} alt="IBM Logo" className="brand-logo" />
        <div className="navbar-divider"></div>
      </div>
      <div className="navbar-menu">
        {/* For The AI */}
        <div className={`dropdown ${openDropdown === 'AI' ? 'open' : ''}`}>
          <a href="#" onClick={() => toggleDropdown('AI')}>
            AI
            <span className="dropdown-caret">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 8l5 5 5-5" stroke="#393939" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
          {openDropdown === 'AI' && (
            <div className="dropdown-content">
              <a href="#">Overview</a>
              <a href="#">Consulting</a>
              <a href="#">Research</a>
              <a href="#">watsonx</a>
              <a href="#">Agents</a>
              <a href="#">Ethics and governance</a>
              <a href="#">Granite models</a>
            </div>
          )}
        </div>
        {/* Hybrid Cloud */}
        <div className={`dropdown ${openDropdown === 'Hybrid Cloud' ? 'open' : ''}`}>
          <a href="#" onClick={() => toggleDropdown('Hybrid Cloud')}>
            Hybrid Cloud
            <span className="dropdown-caret">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 8l5 5 5-5" stroke="#393939" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
          {openDropdown === 'Hybrid Cloud' && (
            <div className="dropdown-content">
              <a href="#">Overview</a>
              <a href="#">Consulting</a>
              <a href="#">IT infrastructure</a>
              <a href="#">Cloud platform</a>
              <a href="#">Quantum computing</a>
              <a href="#">Research</a>
            </div>
          )}
        </div>
        <div className={`dropdown ${openDropdown === 'Products' ? 'open' : ''}`}>
          <a href="#" onClick={() => toggleDropdown('Products')}>
            Products
            <span className="dropdown-caret">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 8l5 5 5-5" stroke="#393939" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
          {openDropdown === 'Products' && (
            <div className="dropdown-content">
              <a href="#">Featured</a>
              <a href="#">Feature AI & Machine Learning</a>
              <a href="#">Analytics</a>
              <a href="#">Asset lifecycle management</a>
              <a href="#">Business automation</a>
              <a href="#">Containers</a>
              <a href="#">Databases</a>
              <a href="#">DevOps & Engineering IT automation</a>
              <a href="#">Middleware</a>
              <a href="#">Network Operating systems</a>
              <a href="#">Quantum Security & identity Servers Storage</a>
            </div>
          )}
        </div>
        <a href="#">Consulting</a>
        <div className={`dropdown ${openDropdown === 'Support' ? 'open' : ''}`}>
          <a href="#" onClick={() => toggleDropdown('Support')}>
            Support
            <span className="dropdown-caret">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 8l5 5 5-5" stroke="#393939" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
          {openDropdown === 'Support' && (
            <div className="dropdown-content">
              <a href="#">Whats New</a>
              <a href="#">Community</a>
              <a href="#">Documentation</a>
              <a href="#">Developer</a>
              <a href="#">Support</a>
              <a href="#">Implementation</a>
              <a href="#">Training</a>
            </div>
          )}
        </div>
        <a href="#">Think</a>
      </div>
      <div className="navbar-icons">
        <span className="icon">
          <img
            src={searchIcon}
            alt="Search"
            className="search-icon"
            onClick={() => setShowSearchBar(true)}
          />
        </span>
        <span className="icon">
          <img
            src={MsgIcon}
            alt="Message"
          />
        </span>
        <span className="icon" onClick={() => setShowLanguageMenu(!showLanguageMenu)}>
          <img
            src={WebIcon}
            alt="Language"
          />
          {showLanguageMenu && (
            <div className="language-menu">
              {languages.map((lang, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Switched to ${lang.name}`);
                    setShowLanguageMenu(false);
                  }}
                >
                  {lang.name}
                </a>
              ))}
            </div>
          )}
        </span>
        <span className="icon">
          <img
            src={UserIcon}
            alt="User"
          />
        </span>
      </div>
      {showSearchBar && (
        <div className="search-bar-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search all of IBM"
            autoFocus
          />
          <span className="search-icon-span">
            <svg width="24" height="24" fill="none" stroke="#393939" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </span>
          <button
            onClick={() => setShowSearchBar(false)}
            aria-label="Close search"
          >
            ✕
          </button>
          <div className="search-bar-underline" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;