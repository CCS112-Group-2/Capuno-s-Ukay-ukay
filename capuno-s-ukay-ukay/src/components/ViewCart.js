import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Checkout from './Checkout'; 

const ViewCart = ({ cartItems, handleRemoveFromCart, handleCheckout }) => {
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    address: '',
    email: ''
  });

  const [showCheckout, setShowCheckout] = useState(false); 

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
    return totalPrice.toFixed(2);
  };

  const handleCheckoutClick = () => {
    if (shippingDetails.name && shippingDetails.address && shippingDetails.email) {
      setShowCheckout(true); 
    } else {
      alert('Please fill in all shipping details.');
    }
  };

  const handleConfirmCheckout = () => {
    
    handleCheckout({ shippingDetails, totalPrice: calculateTotalPrice(), cartItems });
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
                <div>
                  <h3>Shipping Details</h3>
                  <form>
                    <div className="form-group">
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
          <Checkout 
            shippingDetails={shippingDetails} 
            totalPrice={calculateTotalPrice()} 
            handleConfirmCheckout={handleConfirmCheckout} 
          />
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
  handleRemoveFromCart: PropTypes.func.isRequired,
  handleCheckout: PropTypes.func.isRequired
};

export default ViewCart;
