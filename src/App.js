import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Footer from './Footer';

function App() {
  useEffect(() => {
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      section.classList.add('fade-in-on-scroll');
      section.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(section);
    });

    
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;