import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Plus, ArrowLeft, ShoppingCart } from 'lucide-react';
import '../styles/ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container product-not-found">
        <h2>Product not found</h2>
        <Link to="/" className="back-link">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container product-details-page">
      <Link to="/" className="back-link">
        <ArrowLeft size={20} /> Back to Products
      </Link>
      
      <div className="product-details-container">
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="detail-image" />
        </div>
        
        <div className="product-info-container">
          <span className="detail-category">{product.category}</span>
          <h1 className="detail-name">{product.name}</h1>
          <p className="detail-price">${product.price.toFixed(2)}</p>
          <p className="detail-description">{product.description}</p>
          
          <button 
            className="add-to-cart-btn detail-btn" 
            onClick={() => addToCart(product)}
          >
            <Plus size={20} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
