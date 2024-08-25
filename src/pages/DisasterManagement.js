// src/pages/DisasterManagement.js

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Button, Container, Spinner, Table } from 'react-bootstrap';

const DisasterManagement = () => {
  const [disasters, setDisasters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDisasters = async () => {
      try {
        const response = await axios.get('/api/disasters');
        setDisasters(response.data);
      } catch (err) {
        setError('Failed to load disasters. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchDisasters();
  }, []);

  return (
    <Container className="my-5">
      <h1>Disaster Management</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Location</th>
              <th>Severity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {disasters.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">
                  No disasters reported
                </td>
              </tr>
            ) : (
              disasters.map((disaster) => (
                <tr key={disaster.id}>
                  <td>{disaster.title}</td>
                  <td>{disaster.description}</td>
                  <td>{disaster.location}</td>
                  <td>{disaster.severity}</td>
                  <td>
                    <Button variant="info" className="me-2">
                      View Details
                    </Button>
                    {/* Add other actions like Edit or Delete if necessary */}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default DisasterManagement;
