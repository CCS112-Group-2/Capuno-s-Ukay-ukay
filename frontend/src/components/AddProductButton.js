import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function AddProductButton({ onAddToCart }) {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState({ id: '', name: '', description: '', price: 0, quantity: 1 });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddToCart(product);
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formProductId">
              <Form.Label>ID</Form.Label>
              <Form.Control type="text" name="id" value={product.id} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="formProductName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={product.name} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="formProductDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name="description" value={product.description} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formProductPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" name="price" value={product.price} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="formProductQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" name="quantity" value={product.quantity} onChange={handleChange} required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add to Cart
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddProductButton;