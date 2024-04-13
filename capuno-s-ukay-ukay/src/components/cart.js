import React from 'react';
import { ListGroup } from 'react-bootstrap'; // Import ListGroup component

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ListGroup>
        {cartItems.map((item) => (
          <ListGroup.Item key={item.id}>
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: {item.price}</p>
            <Button variant="danger" size="sm" onClick={() => removeFromCart(item)}>
              Remove
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Cart;
