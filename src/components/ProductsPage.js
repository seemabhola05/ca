import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Star, Tag } from 'lucide-react';
import { useCart } from '../App';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const { addToCart } = useCart();

  const categories = ['All', 'Coffee Beans', 'Ground Coffee', 'Cold Brew', 'Breakfast', 'Pastries', 'Accessories'];

  const allProducts = [
    // Coffee Beans
    { id: 101, name: 'Premium Arabica Beans', category: 'Coffee Beans', price: 24.99, image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Single-origin premium arabica beans', rating: 4.8 },
    { id: 102, name: 'Dark Roast Blend', category: 'Coffee Beans', price: 22.99, image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Rich and bold dark roast blend', rating: 4.7 },
    { id: 103, name: 'Ethiopian Single Origin', category: 'Coffee Beans', price: 28.99, image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Floral and fruity Ethiopian beans', rating: 4.9 },
    
    // Ground Coffee
    { id: 104, name: 'House Blend Ground', category: 'Ground Coffee', price: 19.99, image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Our signature house blend, ground fresh', rating: 4.6 },
    { id: 105, name: 'Espresso Ground', category: 'Ground Coffee', price: 21.99, image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Perfect grind for espresso machines', rating: 4.8 },
    
    // Cold Brew
    { id: 106, name: 'Cold Brew Concentrate', category: 'Cold Brew', price: 15.99, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Smooth cold brew concentrate', rating: 4.5 },
    { id: 107, name: 'Nitro Cold Brew', category: 'Cold Brew', price: 18.99, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Creamy nitro-infused cold brew', rating: 4.7 },
    
    // Breakfast
    { id: 108, name: 'Breakfast Sandwich', category: 'Breakfast', price: 8.99, image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Egg, cheese, and bacon on brioche', rating: 4.4 },
    { id: 109, name: 'Avocado Toast', category: 'Breakfast', price: 9.99, image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Fresh avocado on sourdough', rating: 4.6 },
    { id: 110, name: 'Pancake Stack', category: 'Breakfast', price: 12.99, image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Fluffy pancakes with maple syrup', rating: 4.8 },
    
    // Pastries
    { id: 111, name: 'Butter Croissant', category: 'Pastries', price: 3.99, image: 'https://images.unsplash.com/photo-1555507036-ab794f4ade2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Flaky French butter croissant', rating: 4.7 },
    { id: 112, name: 'Chocolate Muffin', category: 'Pastries', price: 4.99, image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Rich chocolate chip muffin', rating: 4.5 },
    { id: 113, name: 'Blueberry Scone', category: 'Pastries', price: 4.49, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Fresh blueberry scone', rating: 4.6 },
    
    // Accessories
    { id: 114, name: 'Café Mug Set', category: 'Accessories', price: 29.99, image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Set of 2 ceramic café mugs', rating: 4.8 },
    { id: 115, name: 'French Press', category: 'Accessories', price: 39.99, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', description: 'Premium glass French press', rating: 4.9 }
  ];

  const offers = [
    { id: 'offer1', title: 'Buy 2 Get 1 Free', description: 'On all coffee beans', discount: '33% OFF', color: 'var(--caramel)' },
    { id: 'offer2', title: 'Free Delivery', description: 'Orders over $25', discount: 'FREE', color: 'var(--coffee-brown)' },
    { id: 'offer3', title: 'Morning Special', description: 'Breakfast + Coffee combo', discount: '20% OFF', color: 'var(--light-gold)' }
  ];

  const filteredProducts = allProducts
    .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return a.name.localeCompare(b.name);
    });

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} size={14} fill={index < Math.floor(rating) ? 'var(--caramel)' : 'none'} color="var(--caramel)" />
    ));
  };

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <section className="section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">Our Products</h1>
          <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem', color: '#666' }}>
            Discover our premium selection of coffee beans, fresh breakfast items, and café accessories.
          </p>
        </motion.div>

        {/* Categories and Filters */}
        <motion.div
          style={{ marginBottom: '3rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div className="menu-categories">
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Filter size={20} color="var(--coffee-brown)" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  padding: '0.5rem 1rem',
                  border: '2px solid var(--beige)',
                  borderRadius: '8px',
                  background: 'white',
                  color: 'var(--coffee-brown)',
                  cursor: 'pointer'
                }}
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="product-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>{product.description}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  {renderStars(product.rating)}
                  <span style={{ fontSize: '0.8rem', color: '#666' }}>({product.rating})</span>
                </div>
                <div className="product-footer">
                  <span className="price">${product.price}</span>
                  <button className="add-to-cart" onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Special Offers */}
        <motion.div
          style={{ marginTop: '5rem' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="section-title">Special Offers</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {offers.map((offer, index) => (
              <motion.div
                key={offer.id}
                style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '15px',
                  boxShadow: '0 5px 20px var(--shadow)',
                  textAlign: 'center',
                  border: `3px solid ${offer.color}`,
                  position: 'relative',
                  overflow: 'hidden'
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: offer.color,
                  color: 'white',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}>
                  <Tag size={12} />
                  {offer.discount}
                </div>
                <h3 style={{ color: offer.color, marginBottom: '1rem', fontSize: '1.5rem' }}>{offer.title}</h3>
                <p style={{ color: '#666', marginBottom: '1.5rem' }}>{offer.description}</p>
                <button 
                  className="cta-btn" 
                  style={{ background: offer.color, border: 'none' }}
                >
                  Claim Offer
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ProductsPage;