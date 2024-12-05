import React from "react";
import { Container, Card, ListGroup } from "react-bootstrap";

const AboutPage: React.FC = () => {
  return (
    <Container className="mt-5">
      <Card>
        <Card.Header as="h2">About This App</Card.Header>
        <Card.Body>
          <Card.Text>
            This app leverages the Rick and Morty API to provide:
          </Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>Character information</ListGroup.Item>
            <ListGroup.Item>Episode details</ListGroup.Item>
            <ListGroup.Item>Locations across the universe</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AboutPage;
