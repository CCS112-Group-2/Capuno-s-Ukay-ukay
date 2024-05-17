import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Checkout from './Checkout';
import OrderSummary from './OrderSummary';

const ViewCart = ({ cartItems, handleRemoveFromCart }) => {
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    address: '',
    email: ''
  });

  const [showCheckout, setShowCheckout] = useState(false);
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails({ ...shippingDetails, [name]: value });
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach(item => {
      const numericPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
      totalPrice += numericPrice * item.quantity;
    });
    return totalPrice;
  };

  const handleCheckoutClick = () => {
    if (shippingDetails.name && shippingDetails.address && shippingDetails.email) {
      setShowCheckout(true);
    } else {
      alert('Please enter all shipping information.');
    }
  };

  const handleConfirmCheckout = () => {
    if (window.confirm('Do you want to confirm checking out?')) {
      setShowOrderSummary(true);
      setShowCheckout(true);
    }else{
      setShowCheckout(false);
      setShowOrderSummary(false);
    }
  };

  const handleCancel = () => {
    setShippingDetails({ name: '', address: '', email: '' });
    setShowCheckout(false);
  };

  return (
    <div>
      <center>
        {!showCheckout ? (
          <>
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <>
                <h2>View Cart</h2>
                <ul className="product-card-body list-group col-sm-8">
                  <li className="list-group-item">
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
                <div>
                  <h3>Shipping Details</h3>
                  <form className='col-sm-8'>
                    <div className="form-group ">
                      <label>Name</label>
                      <input type="text" className="form-control" name="name" value={shippingDetails.name} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                      <label>Address</label>
                      <input type="text" className="form-control" name="address" value={shippingDetails.address} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control" name="email" value={shippingDetails.email} onChange={handleInputChange} />
                    </div>
                  </form>
                  <button className="btn btn-primary" onClick={handleCheckoutClick}>Checkout</button>
                </div>
              </>
            )}
          </>
        ) : (
            
          (!showOrderSummary ? (<><Checkout
            shippingDetails={shippingDetails}
            cartItems={cartItems}
            totalPrice={calculateTotalPrice()}
            handleConfirmCheckout={handleConfirmCheckout} 
            handleCancel={handleCancel}
          /></>):(<OrderSummary
            shippingDetails={shippingDetails}
            cartItems={cartItems}
            totalPrice={calculateTotalPrice()}
            />))
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