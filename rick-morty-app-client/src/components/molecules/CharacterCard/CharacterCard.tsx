import React from "react";
import styles from "./CharacterCard.module.scss";
import Header from "../Header/Header";
import Avatar from "../../atoms/Avatar/Avatar";
import Badge from "../StatusBadge/StatusBadge";

import ThemedTypography from "components/atoms/ThemedTypography/ThemedTypography";
import { Col, Container, Row } from "react-bootstrap";

interface CharacterCart {
  avatar: string;
  name: string;
  status: string;
  species: string;
  location: {
    name: string;
  };
  origin: {
    name: string;
  };
}

function CharacterCard({
  avatar,
  name,
  status,
  species,
  location,
}: CharacterCart) {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col>
            <Row sx={2} className={`${styles.character}`}>
              <Col sm={2}>
                <Avatar src={avatar} alt={name} />
                <Badge variant="Dead">Dead</Badge>
              </Col>
              <Col sm={10}>
                <ThemedTypography size="Large" variant="h1">
                  Imię: {name}
                </ThemedTypography>
                <ThemedTypography size="Medium" variant="h2">
                  Status:{status}, Gatunek: {species}
                </ThemedTypography>
                <ThemedTypography size="Medium" variant="h2">
                  Ostatni znana lokalizacja: {location.name}
                </ThemedTypography>
                <ThemedTypography size="Medium" variant="h2">
                  Pierwszy raz widziany w: {origin}
                </ThemedTypography>
              </Col>
            </Row>
          </Col>

          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default CharacterCard;
