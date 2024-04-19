import React from 'react';
import PropTypes from 'prop-types';
import ViewCart from './ViewCart';

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

    // Call removeFromCart function with updated cart items
    if (typeof removeFromCart === 'function') {
      removeFromCart(updatedCartItems);
    } else {
      console.error('removeFromCart is not a function');
    }
  };

  return (
    <div>
      <center>
        <h2>Cart Summary</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <ViewCart cartItems={cartItems} handleRemoveItem={handleRemoveItem} />
            <p>Total Price: ${calculateTotalPrice()}</p>
          </>
        )}
      </center>
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