import React, { useState } from 'react';
import './App.css';
import Product from './components/Product';
import AddToCartButton from './components/AddtoCartButton';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Link from react-router-dom
import HomePage from './components/HomePage';
import Shopping from './components/Shopping';
import ViewCart from './components/ViewCart';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logo.png'; // Import your logo image
import { Container, Row, Col } from 'react-bootstrap';


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

  const handleRemoveFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/home"><Col xs={12} className="text-center">
          <img src={logo} alt="Company Logo" className="rounded-circle" style={{ maxWidth: '100px', maxHeight: '100px' }} />
        </Col></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/shopping">Proceed to Shopping</Link> {/* Use Link instead of <a> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/viewcart">My Cart</Link> {/* Use Link instead of <a> */}
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/shopping" element={<Shopping products={products} handleAddToCart={handleAddToCart} cartItems={cartItems} />} />
          <Route path="/viewcart" element={<ViewCart cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;