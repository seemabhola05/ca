import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>☕ Café Aroma</h3>
          <p>Your neighborhood coffee destination, serving premium coffee and delicious breakfast since 2020.</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <Facebook size={24} style={{ cursor: 'pointer' }} />
            <Instagram size={24} style={{ cursor: 'pointer' }} />
            <Twitter size={24} style={{ cursor: 'pointer' }} />
          </div>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <MapPin size={16} />
            <span>123 Coffee Street, Downtown</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Phone size={16} />
            <span>(555) 123-CAFE</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Clock size={16} />
            <span>Mon-Sun: 6:00 AM - 9:00 PM</span>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href="#menu">Digital Menu</a>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact Us</Link>
            <a href="#delivery">Delivery Info</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <span>Refund Policy</span>
            <span>FAQ</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Café Aroma. All rights reserved. Made with ❤️ for coffee lovers.</p>
      </div>
    </footer>
  );
};

export default Footer;