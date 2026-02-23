import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CartSidebar from './components/CartSidebar';
import Home from './pages/Home';
import Category from './pages/Category';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import { useCart } from './context/CartContext';
import './styles/App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, toggleCart } = useCart();

  return (
    <div className="app">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems} 
        onRemove={removeFromCart} 
        onUpdateQuantity={updateQuantity} 
      />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<div className="container"><h2>404 - Page Not Found</h2></div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
