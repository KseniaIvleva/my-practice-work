import React from 'react';
import './Footer.css';

function Footer() {
  const handleGitHubClick = () => {
    window.open('https://github.com/', '_blank', 'noopener,noreferrer');
  };

  const handleDribbbleClick = () => {
    window.open('https://dribbble.com/shots/27081815-AI-Powered-Task-Management-UI', '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="taskion-footer" id="footer">
      <div className="footer-content">
        <div className="author-info">
          <p>Виконала: Ксенія Івлєва</p>
        </div>
        <div className="footer-links">
          <button onClick={handleGitHubClick} className="footer-link-btn">
            Мій GitHub
          </button>
          <span className="separator">|</span>
          <button onClick={handleDribbbleClick} className="footer-link-btn">
            Оригінал дизайну Dribbble
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;