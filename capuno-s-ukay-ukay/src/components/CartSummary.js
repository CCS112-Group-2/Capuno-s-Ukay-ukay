import React from 'react';
import PropTypes from 'prop-types';

const CartSummary = ({ cartItems, removeFromCart }) => {
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach(item => {
      const numericPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
      totalPrice += numericPrice * item.quantity;
    });
    return totalPrice.toFixed(2);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    console.log('Item ID to Remove:', itemId);
    console.log('Updated Cart Items:', updatedCartItems);

    if (typeof removeFromCart === 'function') {
      removeFromCart(updatedCartItems); // Call removeFromCart function with updated cart items
    } else {
      console.error('removeFromCart is not a function');
    }
  };

  return (
    <div>
      <h2>Cart Summary</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <p>Total Price: ${calculateTotalPrice()}</p>
    </div>
  );
};

CartSummary.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired
};

export default CartSummary;



