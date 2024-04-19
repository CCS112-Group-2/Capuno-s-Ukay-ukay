import React from 'react';
import Product from './Product';
import AddToCartButton from './AddToCartButton';

const Shopping = ({ products, handleAddToCart, cartItems }) => {
  return (
    <div className="products-container">
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <Product name={product.name} description={product.description} price={product.price} />
            <AddToCartButton product={product} handleAddToCart={handleAddToCart} cartItems={cartItems} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopping;