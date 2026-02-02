import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../App';

const Cart = () => {
  const { 
    items, 
    isCartOpen, 
    setIsCartOpen, 
    updateQuantity, 
    removeFromCart, 
    getTotalPrice 
  } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;
    alert(`Order total: $${getTotalPrice().toFixed(2)}\nThank you for your order! We'll prepare it right away.`);
    setIsCartOpen(false);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          className="cart-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCartOpen(false)}
        >
          <motion.div
            className="cart-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cart-header">
              <h2 style={{ color: 'var(--coffee-brown)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShoppingBag size={24} />
                Your Order
              </h2>
              <button 
                className="close-cart"
                onClick={() => setIsCartOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            <div className="cart-items">
              {items.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
                  <ShoppingBag size={48} style={{ margin: '0 auto 1rem', opacity: 0.3 }} />
                  <p>Your cart is empty</p>
                  <p style={{ fontSize: '0.9rem' }}>Add some delicious items to get started!</p>
                </div>
              ) : (
                items.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-info">
                      <h4>{item.name}</h4>
                      <p style={{ color: '#666', fontSize: '0.9rem' }}>
                        ${item.price.toFixed(2)} each
                      </p>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
                      <div className="quantity-controls">
                        <button 
                          className="quantity-btn"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus size={16} />
                        </button>
                        <span style={{ minWidth: '2rem', textAlign: 'center' }}>
                          {item.quantity}
                        </span>
                        <button 
                          className="quantity-btn"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <strong style={{ color: 'var(--coffee-brown)' }}>
                          ${(item.price * item.quantity).toFixed(2)}
                        </strong>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          style={{ 
                            background: 'none', 
                            border: 'none', 
                            color: '#999', 
                            cursor: 'pointer',
                            fontSize: '0.8rem'
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="cart-total">
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '1rem',
                  fontSize: '1.2rem',
                  fontWeight: 'bold'
                }}>
                  <span>Total:</span>
                  <span style={{ color: 'var(--coffee-brown)' }}>
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>
                
                <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
                  <p>🚚 Free delivery on orders over $25</p>
                  <p>⏱️ Estimated delivery: 25-35 minutes</p>
                </div>

                <button 
                  className="checkout-btn"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cart;