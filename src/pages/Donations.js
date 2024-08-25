// src/pages/Donations.js

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const donations = [
  { id: 1, name: 'Donation 1', amount: '$100', description: 'Description of Donation 1' },
  { id: 2, name: 'Donation 2', amount: '$200', description: 'Description of Donation 2' },
  // Add more donations
];

function Donations() {
  return (
    <Container className="my-4">
      <Row>
        <Col md={12} className="text-center mb-4">
          <h1>Donations</h1>
        </Col>
      </Row>
      <Row>
        {donations.map(donation => (
          <Col md={4} key={donation.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{donation.name}</Card.Title>
                <Card.Text>Amount: {donation.amount}</Card.Text>
                <Card.Text>{donation.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Donations;
