import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Freshly Brewed Coffee, Delivered to Your Door</h1>
        <p>Experience the perfect blend of premium coffee beans, cozy atmosphere, and exceptional service. From our café to your home.</p>
        
        <div className="hero-buttons">
          <button 
            className="btn-primary"
            onClick={() => scrollToSection('menu')}
          >
            View Digital Menu
          </button>
          <button 
            className="btn-secondary"
            onClick={() => scrollToSection('shop')}
          >
            Order Now
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;