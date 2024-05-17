import React from 'react';
import axios from 'axios';
import {useState, useEffect } from "react";
import AddToCartButton from './AddtoCartButton';

const Shopping = ({ handleAddToCart, cartItems }) => {
  
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/products')
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);
  return(
    <div className="container mt-4">
    <div className="row">
      {product.map(product => (
         <div className="col-sm-6 col-md-3" key={product.id}>
         <div className="card mb-3 product-card">
           <div className="card-body">
             <h5 className="card-title">{product.name}</h5>
             <p className="card-text">{product.description}</p>
             <p className="card-text">₱{product.price}</p>
             <AddToCartButton product={product} handleAddToCart={handleAddToCart} cartItems={cartItems} />
           </div>
         </div>
       </div>
      ))}
    </div>
  </div>
  );
}

export default Shopping;