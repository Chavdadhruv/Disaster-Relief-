// src/components/Navigation/Footer.js

import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import custom CSS

const Footer = () => {
  return (
    <footer className="footer-custom">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>We are dedicated to providing an efficient platform for disaster management and response.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/report-disaster">Report Disaster</Nav.Link>
              <Nav.Link as={Link} to="/manage-disasters">Manage Disasters</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            </Nav>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: support@disastermanagement.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Disaster St, City, Country</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>&copy; 2024 Disaster Management. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
