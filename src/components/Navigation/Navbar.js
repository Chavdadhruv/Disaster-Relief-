// src/components/Navigation/Navbar.js

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import custom CSS

const NavbarComponent = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/">Disaster Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/report-disaster">Report Disaster</Nav.Link>
            <Nav.Link as={Link} to="/manage-disasters">Manage Disasters</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/resources">Resources</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/volunteers">Volunteers</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/donations">Donations</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/news">News and Updates</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/messages">Messages</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
