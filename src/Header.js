import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [activeLink, setActiveLink] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

 
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, linkName, sectionId) => {
    e.preventDefault();
    setActiveLink(linkName);
    
    
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSignUp = () => {
    alert('Sign Up functionality - redirect to registration page 🚀');
  };

  const handleSearch = () => {
    alert('Search functionality 🔍');
  };

  return (
    <header className={`taskion-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">TASKION</div>
      <nav className="nav-menu">
        <a 
          href="#home" 
          className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
          onClick={(e) => handleNavClick(e, 'home', 'home')}
        >
          Home
        </a>
        <a 
          href="#how" 
          className={`nav-link ${activeLink === 'how' ? 'active' : ''}`}
          onClick={(e) => handleNavClick(e, 'how', 'features-grid')}
        >
          How It Works
        </a>
        <a 
          href="#benefits" 
          className={`nav-link ${activeLink === 'benefits' ? 'active' : ''}`}
          onClick={(e) => handleNavClick(e, 'benefits', 'features-showcase')}
        >
          Benefits
        </a>
        <a 
          href="#testimonials" 
          className={`nav-link ${activeLink === 'testimonials' ? 'active' : ''}`}
          onClick={(e) => handleNavClick(e, 'testimonials', 'applications')}
        >
          Testimonials
        </a>
        <a 
          href="#pricing" 
          className={`nav-link ${activeLink === 'pricing' ? 'active' : ''}`}
          onClick={(e) => handleNavClick(e, 'pricing', 'footer')}
        >
          Pricing
        </a>
      </nav>
      <div className="header-actions">
        <button className="search-btn" onClick={handleSearch} aria-label="Search">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2"/>
            <path d="M14 14L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <button className="btn btn-dark" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
    </header>
  );
}

export default Header;