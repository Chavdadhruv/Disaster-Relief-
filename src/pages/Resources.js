// src/pages/Resources.js

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const resources = [
  { id: 1, name: 'Resource 1', description: 'Description of Resource 1' },
  { id: 2, name: 'Resource 2', description: 'Description of Resource 2' },
  // Add more resources
];

function Resources() {
  return (
    <Container className="my-4">
      <Row>
        <Col md={12} className="text-center mb-4">
          <h1>Resources</h1>
        </Col>
      </Row>
      <Row>
        {resources.map(resource => (
          <Col md={4} key={resource.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{resource.name}</Card.Title>
                <Card.Text>{resource.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Resources;
