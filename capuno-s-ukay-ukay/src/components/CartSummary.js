import React from 'react';
import PropTypes from 'prop-types';

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

    if (typeof removeFromCart === 'function') {
      removeFromCart(updatedCartItems); // Call removeFromCart function with updated cart items
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
<<<<<<< HEAD
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                </td>
              </tr>
=======
        <ul class="list-group container">
          <li class="list-group-item justify-content-md-center">
            <div class="row">
              <b class="col-sm">Name</b>
              <b class="col-sm">Price</b>
              <b class="col-sm">Quantity</b>
            </div>
            </li>
            <ul class="list-group container"></ul>
            {cartItems.map((item, index) => (
              <li class="list-group-item">
                <div class="row">
                  <div class="col-sm-4 float-left">{item.name}</div>
                  <div class="col-sm-4 float-left">{item.price}</div>
                  <div class="col-sm-4 float-left">{item.quantity}</div>
                </div>
              </li>
>>>>>>> 60a42499ad372f1ad58b88a35e649509566d30cc
            ))}
            </ul>
      
            
      
      )
      
      }
      <p>Total Price: ${calculateTotalPrice()}</p>
      </center>
    </div>
    //</ul> <tr>
            //  <th>Name</th>
            //  <th>Price</th>
             // <th>Quantity</th>
            //  <th>Action</th>
            //</tr>
             // <td>{item.name}</td>
                // <td>{item.price}</td>
                // <td>{item.quantity}</td>
                //   <button onClick={() => handleRemoveItem(index)}>Remove</button>
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



