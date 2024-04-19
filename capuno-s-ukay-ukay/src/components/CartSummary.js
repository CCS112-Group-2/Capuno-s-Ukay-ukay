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
        <ul class="list-group container">
          <li class="list-group-item justify-content-md-center">
            <div class="row">
              <b class="col-sm">Name</b>
              <b class="col-sm">Price</b>
              <b class="col-sm">Quantity</b>
              <b class="col-sm">Remove</b>
            </div>
            </li>
            <ul class="list-group container"></ul>
            {cartItems.map((item, index) => (
              <li class="list-group-item">
                <div class="row">
                  <div class="col-sm-3">{item.name}</div>
                  <div class="col-sm-3">{item.price}</div>
                  <div class="col-sm-3">{item.quantity}</div>
                  <button type="button" class="col-sm-3 btn btn-danger btn-sm" onClick={() => handleRemoveItem(item.id)}>Remove</button>
                </div>
              </li>
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

