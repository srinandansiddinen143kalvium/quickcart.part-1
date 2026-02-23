import React from 'react';
import { X, Trash2, Plus, Minus } from 'lucide-react';
import '../styles/CartSidebar.css';

const CartSidebar = ({ isOpen, onClose, cartItems, onRemove, onUpdateQuantity }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className={`cart-sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Your Cart ({cartItems.length})</h2>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty.</p>
              <button className="start-shopping-btn" onClick={onClose}>Start Shopping</button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                  <div className="cart-item-controls">
                    <div className="quantity-controls">
                      <button 
                        className="qty-btn" 
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={16} />
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        className="qty-btn" 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <button 
                      className="remove-btn" 
                      onClick={() => onRemove(item.id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="total-price">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
