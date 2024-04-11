import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

const AddToCartButton = ({ handleAddToCart, product, cartItems }) => {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (showModal) {
      setQuantity(1);
    }
  }, [showModal]);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };

  const handleAddToCartClick = () => {
    const existingItem = cartItems.find(item => item.name === product.name);
    if (existingItem) {
      handleAddToCart({ ...existingItem, quantity});
    } else {
      handleAddToCart({ ...product, quantity });
    }
    setShowModal(false);
  };

  if (!product) {
    return null;
  }

  return (
    <>
    <Button variant="primary" onClick={() => setShowModal(true)}>
      Add to Cart
    </Button>
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add to Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>{product.name}</h5>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <p>Quantity:</p>
        <Button variant="outline-secondary" onClick={handleDecrement}>-</Button>
        <input type="number" className="form-control quantity-input" value={quantity} min="1" onChange={handleQuantityChange} />
        <Button variant="outline-secondary" onClick={handleIncrement}>+</Button>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAddToCartClick}>
          Add to Cart
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  );
};

export default AddToCartButton;