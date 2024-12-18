import ThemedTypography from "components/atoms/ThemedTypography/ThemedTypography";
import React from "react";
import { Container, Card, ListGroup } from "react-bootstrap";

const AboutPage: React.FC = () => {
  return (
    <Container className="mt-5">
      <Card>
        <Card.Header>
          <ThemedTypography variant="h1" size="Large">
            About This App
          </ThemedTypography>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <ThemedTypography>
              This app leverages the Rick and Morty API to provide:
            </ThemedTypography>
          </Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <ThemedTypography>Character information</ThemedTypography>
            </ListGroup.Item>
            <ListGroup.Item>
              <ThemedTypography>Episode details</ThemedTypography>
            </ListGroup.Item>
            <ListGroup.Item>
              <ThemedTypography>Locations across the universe</ThemedTypography>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AboutPage;
