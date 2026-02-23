import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/CartSidebar.css'; // Reusing styles where possible

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const [hostel, setHostel] = useState('');
  const [room, setRoom] = useState('');

  const handleCheckout = () => {
    if (!hostel || !room) {
      alert("Please enter Hostel and Room number.");
      return;
    }

    // Flatten items as per user request: item 1, item 2...
    const flattenedData = {};
    cartItems.forEach((item, index) => {
      const i = index + 1;
      flattenedData[`item_${i}_name`] = item.name;
      flattenedData[`item_${i}_qty`] = item.quantity;
      flattenedData[`item_${i}_price`] = item.price;
    });

    // Construct URL parameters
    const params = new URLSearchParams();
    params.append('hostel', hostel);
    params.append('room', room);
    params.append('total', cartTotal.toFixed(2));
    
    // Append flattened items
    Object.keys(flattenedData).forEach(key => {
      params.append(key, flattenedData[key]);
    });

    // "Send to URL" - simulating by logging and alert
    const checkoutUrl = `https://example.com/checkout?${params.toString()}`;
    console.log("Checkout URL:", checkoutUrl);
    alert(`Checkout data prepared!\nURL: ${checkoutUrl}`);
    // window.location.href = checkoutUrl; // Uncomment to actually redirect
  };

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart-page">
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="start-shopping-btn">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-page container">
      <h2>Your Shopping Cart</h2>
      
      <div className="cart-page-content">
        <div className="cart-items-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
                <p className="cart-item-subtotal">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              
              <div className="cart-item-actions">
                <div className="quantity-controls">
                  <button 
                    className="qty-btn" 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  <span>{item.quantity}</span>
                  <button 
                    className="qty-btn" 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <button 
                  className="remove-btn" 
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Remove item"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Order Details</h3>
          
          <div className="checkout-inputs">
            <div className="input-group">
              <label htmlFor="hostel">Hostel</label>
              <input 
                type="text" 
                id="hostel" 
                value={hostel} 
                onChange={(e) => setHostel(e.target.value)} 
                placeholder="e.g. Ganga-A"
              />
            </div>
            <div className="input-group">
              <label htmlFor="room">Room Number</label>
              <input 
                type="text" 
                id="room" 
                value={room} 
                onChange={(e) => setRoom(e.target.value)} 
                placeholder="e.g. 347"
              />
            </div>
          </div>

          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
          <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
