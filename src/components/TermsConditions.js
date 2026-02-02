import React from 'react';
import { motion } from 'framer-motion';

const TermsConditions = () => {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <section className="section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">Terms & Conditions</h1>
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
          <h2 style={{ color: 'var(--coffee-brown)', marginBottom: '1rem' }}>Acceptance of Terms</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
            By accessing and using Café Aroma's website and services, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 style={{ color: 'var(--coffee-brown)', marginBottom: '1rem' }}>Orders and Payment</h2>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li>All orders are subject to availability and confirmation</li>
            <li>Prices are subject to change without notice</li>
            <li>Payment must be made at the time of ordering</li>
            <li>We accept major credit cards and digital payment methods</li>
            <li>Orders cannot be cancelled once preparation has begun</li>
          </ul>

          <h2 style={{ color: 'var(--coffee-brown)', marginBottom: '1rem' }}>Delivery Terms</h2>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li>Delivery times are estimates and may vary</li>
            <li>Minimum order value of $15 for delivery</li>
            <li>Delivery charges apply as per distance</li>
            <li>We deliver within a 5-mile radius of our café</li>
            <li>Customer must be available to receive the order</li>
          </ul>

          <h2 style={{ color: 'var(--coffee-brown)', marginBottom: '1rem' }}>Refund Policy</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
            We strive for 100% customer satisfaction. If you're not satisfied with your order, please contact us within 30 minutes of delivery. Refunds will be processed within 3-5 business days.
          </p>

          <h2 style={{ color: 'var(--coffee-brown)', marginBottom: '1rem' }}>Limitation of Liability</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
            Café Aroma shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
          </p>

          <h2 style={{ color: 'var(--coffee-brown)', marginBottom: '1rem' }}>Food Allergies</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
            Please inform us of any food allergies or dietary restrictions when placing your order. While we take precautions, we cannot guarantee that our products are free from allergens.
          </p>

          <h2 style={{ color: 'var(--coffee-brown)', marginBottom: '1rem' }}>Intellectual Property</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
            All content on this website, including text, graphics, logos, and images, is the property of Café Aroma and is protected by copyright laws.
          </p>

          <h2 style={{ color: 'var(--coffee-brown)', marginBottom: '1rem' }}>Changes to Terms</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website.
          </p>

          <h2 style={{ color: 'var(--coffee-brown)', marginBottom: '1rem' }}>Contact Information</h2>
          <p style={{ lineHeight: '1.6' }}>
            For questions about these Terms & Conditions, please contact us at:
            <br />Email: legal@cafearoma.com
            <br />Phone: (555) 123-CAFE
            <br />Address: 123 Coffee Street, Downtown, City, State 12345
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default TermsConditions;