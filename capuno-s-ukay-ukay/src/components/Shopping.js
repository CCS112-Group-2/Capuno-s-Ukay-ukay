import React from 'react';
import Product from './Product';
import AddToCartButton from './AddtoCartButton';
import { Card } from 'react-bootstrap';

const Shopping = ({ products, handleAddToCart, cartItems }) => {
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
    </div>
  );
};

export default Shopping;