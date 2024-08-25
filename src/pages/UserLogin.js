import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './UserLogin.css';

const UserLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login/', {
                username,
                password
            });
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            setMessage('Login successful');
        } catch (error) {
            setMessage(error.response?.data?.error || 'Login failed');
        }
    };

    return (
        <Container className="user-login">
            <Row className="justify-content-center">
                <Col md={6}>
                    <h2 className="text-center">Login</h2>
                    <Form onSubmit={handleLogin}>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your username"
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100">
                            Login
                        </Button>
                    </Form>
                    {message && <p className="text-center mt-3">{message}</p>}
                </Col>
            </Row>
        </Container>
    );
};

export default UserLogin;
