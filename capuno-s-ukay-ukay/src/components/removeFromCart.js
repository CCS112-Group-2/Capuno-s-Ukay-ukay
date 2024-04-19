const removeFromCart = (cartItems, index) => {

  const updatedCartItems = [...cartItems];
 
  updatedCartItems.splice(index, 1);

  return updatedCartItems;
};

export default removeFromCart;
