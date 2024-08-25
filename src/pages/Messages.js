// src/pages/Messages.js

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';

const messages = [
  { id: 1, sender: 'User 1', content: 'Message from User 1' },
  { id: 2, sender: 'User 2', content: 'Message from User 2' },
  // Add more messages
];

function Messages() {
  return (
    <Container className="my-4">
      <Row>
        <Col md={12} className="text-center mb-4">
          <h1>Messages</h1>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <ListGroup>
            {messages.map(message => (
              <ListGroup.Item key={message.id}>
                <strong>{message.sender}:</strong> {message.content}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Messages;
