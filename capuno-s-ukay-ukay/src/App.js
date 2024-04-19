import React, { useState } from 'react';
import './App.css';
import Product from './components/Product';
import AddToCartButton from './components/AddToCartButton'; // Import AddToCartButton component
import CartSummary from './components/CartSummary';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: product.quantity }]);
    }
  };

  const removeFromCart = (updatedCartItems) => {
    setCartItems(updatedCartItems);
  };

  const products = [
    { id: 1, name: 'Beany Hat', description: 'A warm and stylish hat', price: '$15' },
    { id: 2, name: 'Cap', description: 'A trendy cap for sunny days', price: '$25' },
    { id: 3, name: 'Sunglasses', description: 'Classic shades for a cool look', price: '$12' },
    { id: 4, name: 'Hoodie', description: 'Comfy and cozy hoodie', price: '$30' },
    { id: 5, name: 'Jacket', description: 'Stylish jacket to keep you warm', price: '$40' },
    { id: 6, name: 'T-Shirt', description: 'Casual and comfortable tee', price: '$15' },
    { id: 7, name: 'Underwear', description: 'Essential everyday underwear', price: '$8' },
    { id: 8, name: 'Shorts', description: 'Cool and breathable shorts', price: '$20' },
    { id: 9, name: 'Pants', description: 'Versatile and stylish pants', price: '$35' },
    { id: 10, name: 'Shoes', description: 'Sleek and comfortable footwear', price: '$50' }
  ];

  return (
    <div>
      <div className="products-container">
        <h1>Capuno's Ukay-ukay</h1>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <Product name={product.name} description={product.description} price={product.price} />
              <AddToCartButton product={product} handleAddToCart={handleAddToCart} cartItems={cartItems} />
            </div>
          ))}
        </div>
      </div>
      <CartSummary cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
