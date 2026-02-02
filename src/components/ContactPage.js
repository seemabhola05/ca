import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, MessageCircle, Mail } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <section className="section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">Contact Us</h1>
          <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem', color: '#666' }}>
            We'd love to hear from you! Whether you have questions about our menu, want to place a large order, or just want to say hello.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 style={{ color: 'var(--coffee-brown)', marginBottom: '2rem' }}>Get In Touch</h3>
            
            <div className="contact-item">
              <MapPin color="var(--coffee-brown)" />
              <div>
                <strong>Address</strong>
                <p>123 Coffee Street, Downtown<br />City, State 12345</p>
              </div>
            </div>

            <div className="contact-item">
              <Phone color="var(--coffee-brown)" />
              <div>
                <strong>Phone</strong>
                <p>(555) 123-CAFE</p>
              </div>
            </div>

            <div className="contact-item">
              <Mail color="var(--coffee-brown)" />
              <div>
                <strong>Email</strong>
                <p>hello@cafearoma.com</p>
              </div>
            </div>

            <div className="contact-item">
              <Clock color="var(--coffee-brown)" />
              <div>
                <strong>Hours</strong>
                <p>Mon-Fri: 6:00 AM - 8:00 PM<br />
                   Sat-Sun: 7:00 AM - 9:00 PM</p>
              </div>
            </div>

            <div className="contact-item">
              <MessageCircle color="var(--coffee-brown)" />
              <div>
                <strong>WhatsApp</strong>
                <p>(555) 123-CAFE</p>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1!2d-74.0059!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuMiJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '10px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Café Location"
              ></iframe>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 style={{ color: 'var(--coffee-brown)', marginBottom: '2rem' }}>Send us a Message</h3>
            
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="cta-btn" style={{ width: '100%' }}>
              Send Message
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;