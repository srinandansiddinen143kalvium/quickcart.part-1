import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { products } from '../data/products';

const Category = () => {
  const { categoryName } = useParams();
  
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="category-page">
      <h2>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</h2>
      {filteredProducts.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
};

export default Category;
