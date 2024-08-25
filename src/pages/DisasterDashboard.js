// src/pages/DisasterDashboard.js

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Button, Container, Table } from 'react-bootstrap';

const DisasterDashboard = () => {
  const [reports, setReports] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get('/api/disaster-reports');
        setReports(response.data);
        setError('');
      } catch (err) {
        setError('Failed to fetch disaster reports. Please try again.');
        setSuccess('');
      }
    };

    fetchReports();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/disaster-reports/${id}`);
      setReports(reports.filter((report) => report.id !== id));
      setSuccess('Report deleted successfully!');
      setError('');
    } catch (err) {
      setError('Failed to delete the report. Please try again.');
      setSuccess('');
    }
  };

  return (
    <Container className="my-5">
      <h1>Disaster Management Dashboard</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
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
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.title}</td>
              <td>{report.description}</td>
              <td>{report.location}</td>
              <td>{report.severity}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(report.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default DisasterDashboard;
