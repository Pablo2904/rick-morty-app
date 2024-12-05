import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container className="text-center mt-5">
      <h1 className="display-3 text-danger">404</h1>
      <p className="lead">Oops! The page you're looking for doesn't exist.</p>
      <Button variant="primary" onClick={() => navigate("/")}>
        Go Back Home
      </Button>
    </Container>
  );
};

export default NotFoundPage;
