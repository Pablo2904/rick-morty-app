import ThemedTypography from "components/atoms/ThemedTypography/ThemedTypography";
import React from "react";
import { Container, Card, ListGroup } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const AboutPage: React.FC = () => {
  const { t }: { t: (key: string) => string } = useTranslation();

  return (
    <Container className="mt-5">
      <Card>
        <Card.Header>
          <ThemedTypography variant="h1" size="Large">
            {t("aboutPage.header")}
          </ThemedTypography>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <ThemedTypography>{t("aboutPage.cardText")}</ThemedTypography>
          </Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <ThemedTypography>
                {t("aboutPage.listGroupItem1")}
              </ThemedTypography>
            </ListGroup.Item>
            <ListGroup.Item>
              <ThemedTypography>
                {t("aboutPage.listGroupItem2")}
              </ThemedTypography>
            </ListGroup.Item>
            <ListGroup.Item>
              <ThemedTypography>
                {t("aboutPage.listGroupItem3")}
              </ThemedTypography>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AboutPage;
