import React from 'react';
import PropTypes from 'prop-types';

const OrderSummary = ({ shippingDetails, cartItems, totalPrice }) => {
  return (
    <div className="container col-sm-4">
      <h2>Order Summary</h2>
      
      {/* Shipping Details */}
      <div>
        <h3>Shipping Details</h3>
        <div className="table-responsive">
          <table className="table table-bordered table-sm">
            <tbody>
              <tr>
                <td className="detail-label">Name:</td>
                <td>{shippingDetails.name}</td>
              </tr>
              <tr>
                <td>Address:</td>
                <td>{shippingDetails.address}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{shippingDetails.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Cart Summary */}
      <div>
        <h3>Cart Summary</h3>
        <div className="table-responsive">
          <table className="table table-bordered table-sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Total Price */}
      <div>
        <h3>Total Price: ${totalPrice}</h3>
        <button className="btn btn-primary" onClick={() => window.location.href = 'http://localhost:3000/'}>Go Home</button>
        </div>
    </div>
  );
};

OrderSummary.propTypes = {
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
    })
  ).isRequired,
  totalPrice: PropTypes.number.isRequired
};

export default OrderSummary;
