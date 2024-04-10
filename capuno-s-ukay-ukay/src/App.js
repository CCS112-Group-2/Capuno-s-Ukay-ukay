import React from 'react';
import { useState } from 'react';
import './App.css';
import Product from './components/Product';
import AddToCartButton from './components/AddToCartButton'; // Import AddToCartButton component
import CartSummary from './components/CartSummary';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.name === product.name);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex] = {
        ...updatedCartItems[existingItemIndex],
        quantity: updatedCartItems[existingItemIndex].quantity + product.quantity,
        
      };console.log(product.quantity);
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, product]);
    }
  
  };

  const products = [
    { id: 1, name: 'Beany Hat', description: 'A warm and stylish hat', price: '$15' },
    { id: 2, name: 'Cap', description: 'A trendy cap for sunny days', price: '$25' },
    
  ];

  return (
     <div className="app-container">
      <div className="products-container">
        <h1>Capuno's Ukay-ukay</h1>
        <div className="product-list">
          {products.map((product, index) => (
            <div key={index} className="product-item">
              <Product name={product.name} description={product.description} price={product.price} />
              <AddToCartButton product={product} handleAddToCart={handleAddToCart} cartItems={cartItems} />
            </div>
          ))}
        </div>
      </div>
      <div className="cart-summary-container">
        <CartSummary cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;