import React from 'react';
import { ShoppingCart, Search } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Header.css';

const Header = ({ searchTerm, setSearchTerm }) => {
  const { cartItemCount, toggleCart } = useCart();

  const categories = ["Footwear", "Electronics", "Clothing", "Accessories", "Home"];

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo-link">
          <h1>QuickCart</h1>
        </Link>

        <div className="search-bar">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>
          {categories.map((cat) => (
            <NavLink 
              key={cat} 
              to={`/category/${cat.toLowerCase()}`}
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              {cat}
            </NavLink>
          ))}
        </nav>

        <button className="cart-btn" onClick={toggleCart}>
          <ShoppingCart size={24} />
          {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
        </button>
      </div>
    </header>
  );
};

export default Header;
