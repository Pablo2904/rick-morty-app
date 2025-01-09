import ThemedTypography from "components/atoms/ThemedTypography/ThemedTypography";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import style from "./Footer.module.scss";
import { NavLink } from "react-router-dom";
import Avatar from "components/atoms/Avatar/Avatar";

function Footer() {
  return (
    <footer className={style.footer}>
      <Container fluid className={style.footerContainer}>
        <Row>
          <Col>
            <Avatar
              src="https://repository-images.githubusercontent.com/120371205/b6740400-92d4-11ea-8a13-d5f6e0558e9b"
              alt="Rick & Morty"
              size="medium"
            />
          </Col>
        </Row>

        <Row className={`${style.footerLinks}`}>
          <Col xs="auto">
            <NavLink to="/">
              <ThemedTypography>Home</ThemedTypography>
            </NavLink>
          </Col>
          <Col xs="auto">
            <NavLink to="/about">
              <ThemedTypography>About</ThemedTypography>
            </NavLink>
          </Col>
          <Col xs="auto">
            <NavLink to="/contact">
              <ThemedTypography>Contact</ThemedTypography>
            </NavLink>
          </Col>
        </Row>

        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <NavLink to="/PrivacyPolicy">
              <ThemedTypography>Privacy policy</ThemedTypography>
            </NavLink>
          </Col>
        </Row>

        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <ThemedTypography>© 2025 Rick & Morty App</ThemedTypography>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <ThemedTypography>All rights reserved.</ThemedTypography>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
