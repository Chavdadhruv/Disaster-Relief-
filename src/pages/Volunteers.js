// src/pages/Volunteers.js

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';

const volunteers = [
  { id: 1, name: 'Volunteer 1', phone: '123-456-7890', email: 'vol1@example.com' },
  { id: 2, name: 'Volunteer 2', phone: '098-765-4321', email: 'vol2@example.com' },
  // Add more volunteers
];

function Volunteers() {
  return (
    <Container className="my-4">
      <Row>
        <Col md={12} className="text-center mb-4">
          <h1>Volunteers</h1>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {volunteers.map(volunteer => (
                <tr key={volunteer.id}>
                  <td>{volunteer.name}</td>
                  <td>{volunteer.phone}</td>
                  <td>{volunteer.email}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Volunteers;
