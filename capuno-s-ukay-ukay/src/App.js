import React, { useState } from 'react';
import './App.css';
import Product from './components/Product';
import AddToCartButton from './components/AddToCartButton'; // Import AddToCartButton component
import CartSummary from './components/CartSummary';
import { Button } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage';
import Shopping from './components/Shopping';
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
      <Router>
      <nav>
      <a href="#/Home"><h1>Capuno's Ukay-ukay</h1></a>
      <button data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span></span>
      </button>

      <div id="navbarSupportedContent">
        <ul>
          <li>
          <a href="/">Home</a>
          </li>
          <li>
            <a href="/shopping">Shopping</a>
          </li>
        </ul>
      </div>
    </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shopping" element={<Shopping products={products} handleAddToCart={handleAddToCart} cartItems={cartItems} />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
