import React from 'react';
import PropTypes from 'prop-types';

const ViewCart = ({ cartItems, handleRemoveFromCart }) => {
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach(item => {
      const numericPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
      totalPrice += numericPrice * item.quantity;
    });
    return totalPrice.toFixed(2);
  };

  return (
    <div>
      <center>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <h2>View Cart</h2>
            <ul className="product-card-body">
              <li className="list-group-item justify-content-md-center">
                <div className="row">
                  <b className="col-sm">Name</b>
                  <b className="col-sm">Price</b>
                  <b className="col-sm">Quantity</b>
                  <b className="col-sm">Remove</b>
                </div>
              </li>
              {cartItems.map((item) => (
                <li className="list-group-item" key={item.id}>
                  <div className="row">
                    <div className="col-sm-3">{item.name}</div>
                    <div className="col-sm-3">{item.price}</div>
                    <div className="col-sm-3">{item.quantity}</div>
                    <button type="button" className="col-sm-3 btn btn-danger btn-sm" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                  </div>
                </li>
              ))}
            </ul>
            <p>Total Price: ${calculateTotalPrice()}</p>
          </>
        )}
      </center>
    </div>
  );
};

ViewCart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired
};

export default ViewCart;