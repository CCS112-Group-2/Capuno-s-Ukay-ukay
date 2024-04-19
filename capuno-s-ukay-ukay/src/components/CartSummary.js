import React from 'react';

const CartSummary = ({ cartItems, removeFromCart }) => {
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach(item => {
      const numericPrice = parseFloat(item.price.replace(/[^0-9.-]+/g,""));
      totalPrice += numericPrice * item.quantity;
    });
    return totalPrice.toFixed(2);
  };

  const handleRemove = (index) => {
    // Invoke the removeFromCart function with the index of the item to remove
    removeFromCart(index);
  };

  return (
    <div>
      <h2>Cart Summary</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    {/* Use an arrow function to pass index to handleRemove */}
                    <button onClick={() => handleRemove(index)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Total Price: ${calculateTotalPrice()}</p>
        </div>
      )}
    </div>
  );
};

export default CartSummary;
