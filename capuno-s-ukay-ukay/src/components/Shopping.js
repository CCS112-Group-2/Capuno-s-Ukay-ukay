import React, { useState } from 'react';
import Product from './Product';
import AddToCartButton from './AddToCartButton';
import CartSummary from './CartSummary';
import { Card, Button } from 'react-bootstrap';

const Shopping = ({ products, handleAddToCart, cartItems }) => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      <h2>Shopping</h2>
      
      <div className="products-container">
        <div className="product-list">
          {products.map((product) => (
            <Card key={product.id} className="product-item">
              <Card.Body>
                <Product name={product.name} description={product.description} price={product.price} />
                <AddToCartButton product={product} handleAddToCart={handleAddToCart} cartItems={cartItems} />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      <Button variant="primary" onClick={toggleCart}>View Cart</Button>
      {showCart && <CartSummary cartItems={cartItems} />}
    </div>
  );
};

export default Shopping;
