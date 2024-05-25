import React from 'react';
import logo from '../assets/logo.png'; // Import your logo image
import { Container, Row, Col } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Row>
        <Col xs={12} className="text-center">
          <h1>Welcome to Capuno's Ukay-Ukay</h1>
        </Col>
        <Col xs={12} className="text-center">
          <img src={logo} alt="Company Logo" className="rounded-circle" style={{ maxWidth: '200px', maxHeight: '200px' }} />
          
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
