import React from 'react';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <img src={product.image} alt={product.name} className="product-image" />
      </Link>
      <div className="product-info">
        <Link to={`/product/${product.id}`} className="product-name-link">
          <h3 className="product-name">{product.name}</h3>
        </Link>
        <p className="product-price">${product.price}</p>
        <p className="product-category">{product.category}</p>
        <p className="product-description">{product.description}</p>
        <button 
          className="add-to-cart-btn" 
          onClick={() => addToCart(product)}
        >
          <Plus size={18} /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
