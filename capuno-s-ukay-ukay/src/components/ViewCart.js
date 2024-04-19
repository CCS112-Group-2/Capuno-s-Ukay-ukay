import React, { useState } from 'react';
import CartSummary from './CartSummary';

const ViewCart = () => {
  const [cartItems, setCartItems] = useState([
    { name: 'Product A', price: '$10.00', quantity: 2 },
    { name: 'Product B', price: '$20.00', quantity: 1 }
  ]);

  const removeFromCart = (indexToRemove) => {
    setCartItems(prevItems => {
      return prevItems.filter((item, index) => index !== indexToRemove);
    });
  };

  return (
    <div>
      <h1>View Cart</h1>
      <CartSummary cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default ViewCart;
