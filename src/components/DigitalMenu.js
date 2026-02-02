import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../App';

const DigitalMenu = () => {
  const [activeCategory, setActiveCategory] = useState('Coffee');
  const { addToCart } = useCart();

  const menuData = {
    Coffee: [
      { id: 1, name: 'Espresso', description: 'Rich and bold single shot', price: 3.50 },
      { id: 2, name: 'Americano', description: 'Espresso with hot water', price: 4.00 },
      { id: 3, name: 'Cappuccino', description: 'Espresso with steamed milk and foam', price: 4.50 },
      { id: 4, name: 'Latte', description: 'Espresso with steamed milk', price: 5.00 },
      { id: 5, name: 'Mocha', description: 'Espresso with chocolate and steamed milk', price: 5.50 }
    ],
    'Cold Coffee': [
      { id: 6, name: 'Iced Americano', description: 'Chilled espresso with cold water', price: 4.50 },
      { id: 7, name: 'Cold Brew', description: 'Smooth cold-brewed coffee', price: 4.00 },
      { id: 8, name: 'Iced Latte', description: 'Espresso with cold milk over ice', price: 5.50 },
      { id: 9, name: 'Frappé', description: 'Blended iced coffee with whipped cream', price: 6.00 }
    ],
    Breakfast: [
      { id: 10, name: 'Croissant', description: 'Buttery, flaky French pastry', price: 3.00 },
      { id: 11, name: 'Avocado Toast', description: 'Sourdough with fresh avocado', price: 8.50 },
      { id: 12, name: 'Breakfast Sandwich', description: 'Egg, cheese, and bacon on brioche', price: 9.00 },
      { id: 13, name: 'Pancakes', description: 'Fluffy pancakes with maple syrup', price: 10.00 }
    ],
    Combos: [
      { id: 14, name: 'Coffee & Croissant', description: 'Any coffee + fresh croissant', price: 6.50 },
      { id: 15, name: 'Breakfast Special', description: 'Coffee + breakfast sandwich', price: 12.00 },
      { id: 16, name: 'Sweet Morning', description: 'Latte + pancakes', price: 14.00 }
    ]
  };

  const categories = Object.keys(menuData);

  return (
    <section id="menu" className="section">
      <h2 className="section-title">Digital Menu</h2>
      
      <div className="menu-categories">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div 
        className="menu-grid"
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {menuData[activeCategory].map(item => (
          <div key={item.id} className="menu-item">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className="menu-item-footer">
              <span className="price">${item.price.toFixed(2)}</span>
              <button 
                className="add-to-cart"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default DigitalMenu;