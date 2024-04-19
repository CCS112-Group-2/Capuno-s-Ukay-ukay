import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const Cart = ({ cartItems, removeFromCart }) => {
  const handleRemoveItem = (itemId) => {
    // Filter out the item to be removed from cartItems
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    // Call removeFromCart function with updated cart items
    removeFromCart(updatedCartItems);
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ListGroup>
          {cartItems.map((item) => (
            <ListGroup.Item key={item.id}>
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: {item.price}</p>
              <Button variant="danger" size="sm" onClick={() => handleRemoveItem(item.id)}>
                Remove
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default Cart;

