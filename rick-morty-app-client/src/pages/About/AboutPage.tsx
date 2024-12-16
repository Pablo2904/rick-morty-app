import React from "react";
import { Container, Card, ListGroup } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const AboutPage: React.FC = () => {
  const { t }: { t: (key: string) => string } = useTranslation();

  return (
    <Container className="mt-5">
      <Card>
        <Card.Header as="h2">{t("aboutPage.header")}</Card.Header>
        <Card.Body>
          <Card.Text>{t("aboutPage.cardText")}</Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>{t("aboutPage.listGroupItem1")}</ListGroup.Item>
            <ListGroup.Item>{t("aboutPage.listGroupItem2")}</ListGroup.Item>
            <ListGroup.Item>{t("aboutPage.listGroupItem3")}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AboutPage;
