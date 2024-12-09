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

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); // Typed dispatch
  const value = useSelector((state: RootState) => state.example.value); // Access the value from state
  const navigate = useNavigate();

  return (
    <Container className={`mt-5 ${styles.container}`}>
      <Row className="text-center">
        <Col>
          <h1 className="display-4">Rick and Morty App</h1>
          <p className={`lead ${styles.title}`}>
            Explore characters, locations, and episodes from the Rick and Morty
            universe.
          </p>

          <Button
            onClick={() => navigate("/about")}
            variant="primary"
            size="lg"
          >
            Idź do About This App
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
      </Row>
    </Container>
  );
};

export default HomePage;
