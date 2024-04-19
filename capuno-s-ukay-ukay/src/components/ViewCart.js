import React, { useState } from 'react';

const ViewCart = () => {
  // cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Beany Hat', price: '$15' },
    { id: 2, name: 'Cap', price: '$25' },
    { id: 3, name: 'Sunglasses', price: '$12' },
    { id: 4, name: 'Hoodie', price: '$30' },
    { id: 5, name: 'Jacket', price: '$40' },
    { id: 6, name: 'T-Shirt', price: '$15' },
    { id: 7, name: 'Underwear', price: '$8' },
    { id: 8, name: 'Shorts', price: '$20' },
    { id: 9, name: 'Pants', price: '$35' },
    { id: 10, name: 'Shoes', price: '$50' },
    

  ]);

  // Function to remove an item from cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewCart;
