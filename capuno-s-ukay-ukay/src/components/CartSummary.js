import React from 'react';

const CartSummary = ({ cartItems, removeFromCart }) => {
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach(item => {
      const numericPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
      totalPrice += numericPrice * item.quantity;
    });
    return totalPrice.toFixed(2);
  };

  const removeItemFromCart = (itemId) => {
    if (typeof removeFromCart === 'function') {
      // Filter out the item to be removed from cartItems
      const updatedCartItems = cartItems.filter(item => item.id !== itemId);
      // Call removeFromCart function with updated cart items
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

export default CartSummary;

