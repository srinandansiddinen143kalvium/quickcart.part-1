import React from 'react';
import { Plus } from 'lucide-react';
import '../styles/ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price}</p>
        <p className="product-category">{product.category}</p>
        <p className="product-description">{product.description}</p>
        <button 
          className="add-to-cart-btn" 
          onClick={() => onAddToCart(product)}
        >
          <Plus size={18} /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
