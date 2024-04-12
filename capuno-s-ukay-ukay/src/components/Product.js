import React from 'react';
import AddToCartButton from './AddToCartButton'; // Import AddToCartButton component

const Product = ({ id, name, description, price, addToCart }) => {
  return (
    <div className="product-card">
        <div className="product-card-body">
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Price: {price}</p>
            <AddToCartButton name={name} description={description} price={price} addToCart={addToCart} />
        </div>
    </div>
  );
};

export default Product;