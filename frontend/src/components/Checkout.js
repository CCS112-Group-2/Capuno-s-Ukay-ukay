import React from 'react';
import PropTypes from 'prop-types';

const Checkout = ({ shippingDetails, cartItems, totalPrice, handleConfirmCheckout, handleCancel }) => {
  const handleConfirm = () => {
    handleConfirmCheckout(); 
  };

  const handleCancelClick = () => {
    handleCancel();
  };

  return (
    <div>
      <h2>Checkout</h2>
      
      <div>
        <h3>Shipping Details</h3>
        <p>Name: {shippingDetails.name}</p>
        <p>Address: {shippingDetails.address}</p>
        <p>Email: {shippingDetails.email}</p>
      </div>
      <div>
        <h3>Cart Summary</h3>
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity} - Price: ${item.price}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Total Price: ${totalPrice}</h3>
      </div>
      <button className="btn btn-primary" onClick={handleConfirm}>Confirm Checkout</button>
      <button className="btn btn-secondary" onClick={handleCancelClick}>Cancel</button>
    </div>
  );
};

Checkout.propTypes = {
    shippingDetails: PropTypes.shape({
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    }).isRequired,
    cartItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired
      })).isRequired,
    totalPrice: PropTypes.number.isRequired,
    handleConfirmCheckout: PropTypes.func.isRequired 
};

export default Checkout;
