import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Phone } from 'lucide-react';
import { useCart } from '../App';

const Header = () => {
  const { getTotalItems, setIsCartOpen } = useCart();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">☕ Café Aroma</Link>
        
        <nav className="nav">
          <Link to="/" onClick={() => scrollToSection('hero')}>Home</Link>
          <a href="#" onClick={() => scrollToSection('menu')}>Digital Menu</a>
          <Link to="/products">Products</Link>
          <a href="#" onClick={() => scrollToSection('breakfast')}>Breakfast</a>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="header-actions">
          <button 
            className="cart-btn"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart size={24} />
            {getTotalItems() > 0 && (
              <span className="cart-count">{getTotalItems()}</span>
            )}
          </button>
          
          <button className="cta-btn">
            <Phone size={16} style={{ marginRight: '0.5rem' }} />
            Order Online
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;