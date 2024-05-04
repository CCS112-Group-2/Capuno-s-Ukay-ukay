import React from 'react';
import PropTypes from 'prop-types';

const Checkout = ({ shippingDetails, totalPrice, handleConfirmCheckout }) => {
  const handleConfirm = () => {
    
    handleConfirmCheckout();
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
        <h3>Total Price: ${totalPrice}</h3>
      </div>
      <button className="btn btn-primary" onClick={handleConfirm}>Confirm Checkout</button>
    </div>
  );
};

Checkout.propTypes = {
  shippingDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired,
  totalPrice: PropTypes.number.isRequired,
  handleConfirmCheckout: PropTypes.func.isRequired
};

export default Checkout;
