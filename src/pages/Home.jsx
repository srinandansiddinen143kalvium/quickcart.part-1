import React from 'react';
import ProductList from '../components/ProductList';
import { products } from '../data/products';

const Home = ({ searchTerm }) => {
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      {filteredProducts.length === 0 ? (
        <div className="no-results">
          <p>No products found matching "{searchTerm}"</p>
        </div>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
};

export default Home;
