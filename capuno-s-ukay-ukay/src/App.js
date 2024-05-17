import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './components/HomePage';
import Shopping from './components/Shopping';
import ViewCart from './components/ViewCart';
import Product from './components/Product';
import AddProductModal from './components/AddProductButton';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import {useState, useEffect} from "react";
import axios from 'axios';

function App() {

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => {
      // Check if the product is already in the cart
      const existingItem = prevCartItems.find(item => item.id === product.id);
      if (existingItem) {
        // If it exists, increase the quantity
        return prevCartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If it doesn't exist, add it to the cart with quantity 1
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (productId) => {
    // Remove the item from the cart based on productId
    // Implement your logic here
    console.log('Removing product with ID:', productId);
  };


  return (
    <div>
      <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/home">
            <Col xs={12} className="text-center">
              <img src={logo} alt="Company Logo" className="rounded-circle" style={{ maxWidth: '100px', maxHeight: '100px' }} />
            </Col>
        </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link> {/* Use Link instead of <a> */}
              </li>
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
          <Route path="/shop" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/shopping" element={<Shopping handleAddToCart={handleAddToCart} cartItems={cartItems} />} />
          <Route path="/viewcart" element={<ViewCart cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
