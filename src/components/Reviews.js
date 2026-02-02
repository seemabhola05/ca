import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      text: 'The best coffee in town! The atmosphere is so cozy and the staff is incredibly friendly. My morning latte is always perfect.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 2,
      name: 'Mike Chen',
      rating: 5,
      text: 'Love the home delivery service! Coffee arrives hot and fresh every time. The breakfast sandwiches are amazing too.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      rating: 5,
      text: 'This place feels like home. Great coffee, delicious pastries, and the perfect spot to work or catch up with friends.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        fill={index < rating ? 'currentColor' : 'none'}
        color="var(--caramel)"
      />
    ));
  };

  return (
    <section className="section">
      <h2 className="section-title">What Our Customers Say</h2>
      
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            className="review-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="stars">
              {renderStars(review.rating)}
            </div>
            
            <p className="review-text">"{review.text}"</p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img 
                src={review.avatar} 
                alt={review.name}
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
              <div className="reviewer-name">{review.name}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;