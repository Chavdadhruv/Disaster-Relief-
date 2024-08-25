// src/pages/News.js

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const newsArticles = [
  { id: 1, title: 'News Article 1', summary: 'Summary of News Article 1' },
  { id: 2, title: 'News Article 2', summary: 'Summary of News Article 2' },
  // Add more news articles
];

function News() {
  return (
    <Container className="my-4">
      <Row>
        <Col md={12} className="text-center mb-4">
          <h1>News and Updates</h1>
        </Col>
      </Row>
      <Row>
        {newsArticles.map(article => (
          <Col md={4} key={article.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.summary}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default News;
