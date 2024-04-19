import React, { useState } from 'react';
import Product from './Product';
import AddToCartButton from './AddToCartButton';
import CartSummary from './CartSummary';

const Shopping = ({ products, handleAddToCart, cartItems }) => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      <h2>Shopping</h2>
      
      <div>
        <div>
          {products.map((product) => (
            <div key={product.id}>
              <Product name={product.name} description={product.description} price={product.price} />
              <AddToCartButton product={product} handleAddToCart={handleAddToCart} cartItems={cartItems} />
            </div>
          ))}
        </div>
      </div>
      <button onClick={toggleCart}>View Cart</button>
      {showCart && <CartSummary cartItems={cartItems} />}
    </div>
  );
};

export default Shopping;
