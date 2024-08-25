// src/pages/ReportDisaster.js

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Alert, Button, Container, Form } from 'react-bootstrap';

const ReportDisaster = () => {
  const [formData, setFormData] = useState({
    disasterType: '',
    description: '',
    location: '',
    date: '',
    severity: ''
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form Data Submitted:', formData);
    setShowAlert(true);
  };

  return (
    <Container>
      <h1 className="my-4">Report a Disaster</h1>
      {showAlert && <Alert variant="success">Disaster reported successfully!</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formDisasterType">
          <Form.Label>Type of Disaster</Form.Label>
          <Form.Control
            type="text"
            name="disasterType"
            placeholder="Enter type of disaster"
            value={formData.disasterType}
            onChange={handleChange}
            required
          />
        </Form.Group>
        
        <Form.Group controlId="formDescription" className="mt-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            placeholder="Describe the disaster"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formLocation" className="mt-3">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            name="location"
            placeholder="Enter location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formDate" className="mt-3">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formSeverity" className="mt-3">
          <Form.Label>Severity</Form.Label>
          <Form.Control
            as="select"
            name="severity"
            value={formData.severity}
            onChange={handleChange}
            required
          >
            <option value="">Select severity</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-4">
          Report Disaster
        </Button>
      </Form>
    </Container>
  );
};

export default ReportDisaster;
