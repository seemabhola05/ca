import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useCart } from '../App';

const BestSellers = () => {
  const { addToCart } = useCart();

  const bestSellers = [
    {
      id: 23,
      name: 'Signature Latte',
      description: 'Our most popular coffee with house-made vanilla syrup',
      price: 5.50,
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      badge: 'Customer Favorite'
    },
    {
      id: 24,
      name: 'Breakfast Burrito',
      description: 'Scrambled eggs, cheese, and bacon wrapped in a warm tortilla',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      badge: 'Best Seller'
    },
    {
      id: 25,
      name: 'Iced Caramel Macchiato',
      description: 'Espresso with vanilla syrup, milk, and caramel drizzle',
      price: 6.00,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      badge: 'Most Ordered'
    }
  ];

  return (
    <section id="breakfast" className="section" style={{ background: 'var(--cream)' }}>
      <h2 className="section-title">Best Sellers</h2>
      
      <div className="product-grid">
        {bestSellers.map((item, index) => (
          <motion.div
            key={item.id}
            className="product-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              background: 'var(--caramel)',
              color: 'white',
              padding: '0.3rem 0.8rem',
              borderRadius: '15px',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}>
              <Star size={12} fill="currentColor" />
              {item.badge}
            </div>
            
            <img 
              src={item.image} 
              alt={item.name}
              className="product-image"
            />
            <div className="product-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="product-footer">
                <span className="price">${item.price}</span>
                <button 
                  className="add-to-cart"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;