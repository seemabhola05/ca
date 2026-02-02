import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <section className="section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">Privacy Policy</h1>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '3rem' }}>
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        <motion.div
          style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 5px 20px var(--shadow)' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 style={{ color: 'var(--coffee-brown)', marginBottom: '1rem' }}>Information We Collect</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
            We collect information you provide directly to us, such as when you create an account, place an order, or contact us. This may include your name, email address, phone number, delivery address, and payment information.
          </p>

          <h2 style={{ color: 'var(--coffee-brown)', marginBottom: '1rem' }}>How We Use Your Information</h2>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your orders and our services</li>
            <li>Send you promotional materials (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 style={{ color: 'var(--coffee-brown)', marginBottom: '1rem' }}>Information Sharing</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with trusted service providers who assist us in operating our website and conducting our business.
          </p>

          <h2 style={{ color: 'var(--coffee-brown)', marginBottom: '1rem' }}>Data Security</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 style={{ color: 'var(--coffee-brown)', marginBottom: '1rem' }}>Cookies</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
            We use cookies to enhance your experience on our website, remember your preferences, and analyze website traffic. You can choose to disable cookies through your browser settings.
          </p>

          <h2 style={{ color: 'var(--coffee-brown)', marginBottom: '1rem' }}>Your Rights</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
            You have the right to access, update, or delete your personal information. You may also opt out of receiving promotional communications from us at any time.
          </p>

          <h2 style={{ color: 'var(--coffee-brown)', marginBottom: '1rem' }}>Contact Us</h2>
          <p style={{ lineHeight: '1.6' }}>
            If you have any questions about this Privacy Policy, please contact us at:
            <br />Email: privacy@cafearoma.com
            <br />Phone: (555) 123-CAFE
            <br />Address: 123 Coffee Street, Downtown, City, State 12345
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;