import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { RootState, AppDispatch } from "state/store/store";
import {
  increment,
  decrement,
  incrementByAmount,
} from "state/exampleSlice/exampleSlice";
import styles from "./HomePage.module.scss";
import { useNavigate } from "react-router-dom";
import Header from "components/molecules/Header/Header";
import ThemedTypography from "components/atoms/ThemedTypography/ThemedTypography";
import { useToast } from "context/ToastContext/ToastContext";

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); // Typed dispatch
  const value = useSelector((state: RootState) => state.example.value); // Access the value from state
  const navigate = useNavigate();

  //Wywołanie toast
  const { showPredefinedToast } = useToast();

  return (
    <>
      <Header />
      <Container className={`mt-5 ${styles.container}`}>
        <Row className="text-center">
          <Col>
            <ThemedTypography variant="h1" size="Large">
              Test Large
            </ThemedTypography>
            <ThemedTypography variant="h2" size="Medium">
              Test Medium
            </ThemedTypography>
            <ThemedTypography variant="h3" size="Small">
              Test Small
            </ThemedTypography>
            <Button
              onClick={() => navigate("/about")}
              variant="primary"
              size="lg"
            >
              <ThemedTypography>Idź do About This App</ThemedTypography>
            </Button>
          </Col>
        </Row>
        <Row className="mt-3">
          <p className={styles.description}>Current Value: {value}</p>
          <Col>
            <Button variant="primary" onClick={() => dispatch(increment())}>
              Increment
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" onClick={() => dispatch(decrement())}>
              Decrement
            </Button>
          </Col>
          <Col>
            <Button
              variant="success"
              onClick={() => dispatch(incrementByAmount(5))}
            >
              Increment by 5
            </Button>
          </Col>
          <button onClick={() => showPredefinedToast("infoMessage")}>
            Show Info Toast
          </button>
          <button onClick={() => showPredefinedToast("successMessage")}>
            Show Success Toast
          </button>
          <button onClick={() => showPredefinedToast("errorMessage")}>
            Show Error Toast
          </button>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
