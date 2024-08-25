// src/pages/ResourceDirectory.js

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

const resources = [
  { id: 1, title: 'Emergency Contact List', description: 'List of emergency contacts including local authorities and hospitals.' },
  { id: 2, title: 'Disaster Preparedness Guide', description: 'Guide on how to prepare for different types of disasters.' },
  { id: 3, title: 'First Aid Kit Checklist', description: 'Checklist of items to include in a first aid kit for emergencies.' },
  // Add more resources as needed
];

function ResourceDirectory() {
  const [search, setSearch] = useState('');

  const filteredResources = resources.filter(resource =>
    resource.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="my-4">
      <Row>
        <Col md={12} className="text-center mb-4">
          <h1>Resource Directory</h1>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="mb-4">
          <Form>
            <Form.Group controlId="search">
              <Form.Control
                type="text"
                placeholder="Search for resources..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        {filteredResources.map(resource => (
          <Col md={4} key={resource.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{resource.title}</Card.Title>
                <Card.Text>{resource.description}</Card.Text>
                <Button variant="primary" href="#">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ResourceDirectory;
