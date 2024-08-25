// src/pages/EmergencyContacts.js

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';

const initialContacts = [
  { id: 1, name: 'John Doe', phone: '123-456-7890', role: 'Fire Department' },
  { id: 2, name: 'Jane Smith', phone: '987-654-3210', role: 'Police Department' },
  { id: 3, name: 'Emily Johnson', phone: '555-555-5555', role: 'Hospital' },
  // Add more contacts as needed
];

function EmergencyContacts() {
  const [contacts, setContacts] = useState(initialContacts);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newContact, setNewContact] = useState({ name: '', phone: '', role: '' });

  const handleAddContact = () => {
    setContacts([...contacts, { ...newContact, id: contacts.length + 1 }]);
    setShowAddModal(false);
    setNewContact({ name: '', phone: '', role: '' });
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <Container className="my-4">
      <Row>
        <Col md={12} className="text-center mb-4">
          <h1>Emergency Contacts</h1>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="mb-4 text-right">
          <Button variant="primary" onClick={() => setShowAddModal(true)}>Add Contact</Button>
        </Col>
      </Row>
      <Row>
        {contacts.map(contact => (
          <Col md={4} key={contact.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{contact.name}</Card.Title>
                <Card.Text>
                  Phone: {contact.phone}
                  <br />
                  Role: {contact.role}
                </Card.Text>
                <Button variant="danger" onClick={() => handleDeleteContact(contact.id)}>Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Add Contact Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="contactName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter contact name"
                value={newContact.name}
                onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="contactPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter contact phone"
                value={newContact.phone}
                onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="contactRole">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter contact role"
                value={newContact.role}
                onChange={(e) => setNewContact({ ...newContact, role: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleAddContact}>Add Contact</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default EmergencyContacts;
