import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartSidebar from './components/CartSidebar';
import { products } from './data/products';
import './styles/App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true); // Open cart when item is added
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="app">
      <Header cartItemCount={cartItemCount} onCartClick={toggleCart} />
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={toggleCart} 
        cartItems={cartItems} 
        onRemove={removeFromCart} 
        onUpdateQuantity={updateQuantity} 
      />
      <main className="main-content">
        <ProductList products={products} onAddToCart={addToCart} />
      </main>
    </div>
  );
}

export default App;
