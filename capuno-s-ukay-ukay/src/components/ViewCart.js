import React from 'react';
import PropTypes from 'prop-types';

const ViewCart = ({ cartItems, handleRemoveItem }) => {
  return (
    <div>
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
              <button type="button" className="col-sm-3 btn btn-danger btn-sm" onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
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
  ).isRequired
};

export default ViewCart;