// src/pages/Home.js

import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="home-background">
        <div className="hero-overlay">
          <Container className="hero-content text-center">
            <h1 className="hero-title">Welcome to the Disaster Management System</h1>
            <p className="hero-subtitle">Manage disasters efficiently with our platform. Get real-time updates and resources to stay prepared.</p>
            <Button variant="light" href="/report-disaster" className="btn-lg btn-hero">Report a Disaster</Button>
            <Button variant="info" href="/manage-disasters" className="btn-lg btn-hero">Manage Disasters</Button>
          </Container>
        </div>
      </div>

      {/* Features Section */}
      <Container className="features-section">
        <h2 className="section-title text-center">Key Features</h2>
        <Row>
          <Col md={4}>
            <Card className="feature-card">
              <Card.Img variant="top" src="/icon1.png" />
              <Card.Body>
                <Card.Title>Real-Time Updates</Card.Title>
                <Card.Text>Receive timely updates on disasters happening around you.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card">
              <Card.Img variant="top" src="/icon2.png" />
              <Card.Body>
                <Card.Title>Resource Management</Card.Title>
                <Card.Text>Access essential resources and manage them effectively.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card">
              <Card.Img variant="top" src="/icon3.png" />
              <Card.Body>
                <Card.Title>Community Support</Card.Title>
                <Card.Text>Connect with local volunteers and support networks.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Testimonials Section */}
      <Container className="testimonials-section">
        <h2 className="section-title text-center">What Our Users Say</h2>
        <Row>
          <Col md={6}>
            <Card className="testimonial-card">
              <Card.Body>
                <Card.Text>"This platform has been a lifesaver during emergencies. It's user-friendly and reliable."</Card.Text>
                <Card.Footer>- Jane Doe, Local Volunteer</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="testimonial-card">
              <Card.Body>
                <Card.Text>"A must-have tool for disaster management. The updates are timely and accurate."</Card.Text>
                <Card.Footer>- John Smith, Community Leader</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Newsletter Section */}
      <Container className="newsletter-section">
        <h2 className="section-title text-center">Stay Updated</h2>
        <p className="text-center">Subscribe to our newsletter for the latest updates and tips on disaster management.</p>
        <Form className="text-center">
          <Form.Group controlId="formNewsletter">
            <Form.Control type="email" placeholder="Enter your email" />
            <Button variant="success" type="submit" className="mt-3">Subscribe</Button>
          </Form.Group>
        </Form>
      </Container>

      {/* Contact Section */}
      <Container className="contact-section">
        <h2 className="section-title text-center">Get In Touch</h2>
        <Row>
          <Col md={4}>
            <Card className="contact-card">
              <Card.Body>
                <Card.Title>Email Us</Card.Title>
                <Card.Text>support@disastermanagement.com</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="contact-card">
              <Card.Body>
                <Card.Title>Call Us</Card.Title>
                <Card.Text>+123 456 7890</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="contact-card">
              <Card.Body>
                <Card.Title>Visit Us</Card.Title>
                <Card.Text>123 Disaster St, City, Country</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
