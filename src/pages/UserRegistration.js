import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './UserRegistration.css';

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/api/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Handle success (e.g., show a success message or redirect)
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle error
    });
  };

  return (
    <Container className="user-registration">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center">Register</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control 
                type="text" 
                name="username" 
                value={formData.username} 
                onChange={handleChange} 
                placeholder="Enter your username" 
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Enter your email" 
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                placeholder="Enter your password" 
              />
            </Form.Group>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control 
                type="text" 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleChange} 
                placeholder="Enter your first name" 
              />
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control 
                type="text" 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleChange} 
                placeholder="Enter your last name" 
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserRegistration;
