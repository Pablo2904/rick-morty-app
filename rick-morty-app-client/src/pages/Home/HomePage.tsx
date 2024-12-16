import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { RootState, AppDispatch } from "../../state/store/store";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../state/exampleSlice/exampleSlice";
import styles from "./HomePage.module.scss";
import { useNavigate } from "react-router-dom";
import Header from "../../components/molecules/Header/Header";

//i18next-react
import { useTranslation } from "react-i18next";

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); // Typed dispatch
  const value = useSelector((state: RootState) => state.example.value); // Access the value from state
  const navigate = useNavigate();

  const { t }: { t: (key: string) => string } = useTranslation();

  return (
    <>
      <Header />
      <Container className={`mt-5 ${styles.container}`}>
        <Row className="text-center">
          <Col>
            <h1 className="display-4">{t("homePage.title")}</h1>
            <p className={`lead ${styles.title}`}>{t("homePage.content")}</p>

            <Button
              onClick={() => navigate("/about")}
              variant="primary"
              size="lg"
            >
              {t("homePage.goToAboutButton")}
            </Button>
          </Col>
        </Row>
        <Row className="mt-3">
          <p className={styles.description}>
            {t("homePage.currentValue")}
            {value}
          </p>
          <Col>
            <Button variant="primary" onClick={() => dispatch(increment())}>
              {t("homePage.incrementButton")}
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" onClick={() => dispatch(decrement())}>
              {t("homePage.decrementButton")}
            </Button>
          </Col>
          <Col>
            <Button
              variant="success"
              onClick={() => dispatch(incrementByAmount(5))}
            >
              {t("homePage.incrementBy5Button")}
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
