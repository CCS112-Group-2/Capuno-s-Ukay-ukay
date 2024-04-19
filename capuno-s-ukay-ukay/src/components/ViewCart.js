import React from 'react';
import PropTypes from 'prop-types';

const ViewCart = ({ cartItems, handleRemoveItem }) => {
  return (
    <div>
      <h2>View Cart</h2>
      <ul>
        <li>
            <div>
                <b>Name</b>
                <b>Price</b>
                <b>Quantity</b>
                <b>Remove</b>
            </div>
        </li>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>
              <div>{item.name}</div>
              <div>{item.price}</div>
              <div>{item.quantity}</div>
              <button type="button" onClick={() => handleRemoveItem(item.id)}>Remove</button>
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