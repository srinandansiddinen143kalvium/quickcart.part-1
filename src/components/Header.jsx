import React from 'react';
import { ShoppingCart } from 'lucide-react';
import '../styles/Header.css';

const Header = ({ cartItemCount, onCartClick }) => {
  return (
    <header className="header">
      <div className="container header-content">
        <h1>QuickCart</h1>
        <button className="cart-btn" onClick={onCartClick}>
          <ShoppingCart size={24} />
          {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
        </button>
      </div>
    </header>
  );
};

export default Header;
