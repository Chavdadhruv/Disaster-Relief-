// src/pages/DisasterReporting.js

import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Button, Container, Form } from 'react-bootstrap';

const DisasterReporting = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    severity: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { title, description, location, severity } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/disaster-report', formData);
      setSuccess('Disaster report submitted successfully!');
      setError('');
      setFormData({
        title: '',
        description: '',
        location: '',
        severity: '',
      });
    } catch (err) {
      setError('Failed to submit the report. Please try again.');
      setSuccess('');
    }
  };

  return (
    <Container className="my-5">
      <h1>Disaster Reporting</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter disaster title"
            name="title"
            value={title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Describe the disaster"
            name="description"
            value={description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter location"
            name="location"
            value={location}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formSeverity">
          <Form.Label>Severity</Form.Label>
          <Form.Control
            as="select"
            name="severity"
            value={severity}
            onChange={handleChange}
            required
          >
            <option value="">Select severity</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit Report
        </Button>
      </Form>
    </Container>
  );
};

export default DisasterReporting;
