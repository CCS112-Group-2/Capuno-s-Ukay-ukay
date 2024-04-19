import React from 'react';

const CartSummary = ({ cartItems, removeFromCart }) => {
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach(item => {
      const numericPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
      totalPrice += numericPrice * item.quantity;
    });
    return totalPrice.toFixed(2);
  };

  const removeItemFromCart = (itemId) => {
    if (typeof removeFromCart === 'function') {
      // Filter out the item to be removed from cartItems
      const updatedCartItems = cartItems.filter(item => item.id !== itemId);
      // Call removeFromCart function with updated cart items
      removeFromCart(updatedCartItems);
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
                  <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
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

export default CartSummary;

