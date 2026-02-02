import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../App';

const Shop = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 17,
      name: 'Premium Coffee Beans',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Coffee Beans'
    },
    {
      id: 18,
      name: 'Ground Espresso',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Ground Coffee'
    },
    {
      id: 19,
      name: 'Cold Brew Concentrate',
      price: 15.99,
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Beverages'
    },
    {
      id: 20,
      name: 'Artisan Croissants (6-pack)',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1555507036-ab794f4ade2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Bakery'
    },
    {
      id: 21,
      name: 'Breakfast Blend',
      price: 22.99,
      image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Coffee Beans'
    },
    {
      id: 22,
      name: 'Café Mug Set',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Accessories'
    }
  ];

  return (
    <section id="shop" className="section">
      <h2 className="section-title">Shop Our Products</h2>
      
      <div className="product-grid">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="product-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img 
              src={product.image} 
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.category}</p>
              <div className="product-footer">
                <span className="price">${product.price}</span>
                <button 
                  className="add-to-cart"
                  onClick={() => addToCart(product)}
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

export default Shop;