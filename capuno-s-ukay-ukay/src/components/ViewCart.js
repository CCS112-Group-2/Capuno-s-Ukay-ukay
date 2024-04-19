import React, { useState } from 'react';
import CartSummary from './CartSummary';

const ViewCart = () => {
  // Initial cart state with sample items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product A', price: '10.00', quantity: 2 },
    { id: 2, name: 'Product B', price: '20.00', quantity: 1 }
  ]);

  // Function to remove item from cart based on index
  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1); // Remove item at specified index
    setCartItems(updatedCart); // Update cart state
  };

  return (
    <div>
      <h1>View Cart</h1>
      <CartSummary cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default ViewCart;

