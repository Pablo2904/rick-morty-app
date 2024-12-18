import ThemedTypography from "components/atoms/ThemedTypography/ThemedTypography";
import React, { useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const redirectDelay = 5000;

  useEffect(() => {
    const timer = setTimeout(() => navigate("/"), redirectDelay);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Container className="text-center mt-5">
      <ThemedTypography variant="h1" size="Large" className="text-danger">
        404
      </ThemedTypography>
      <ThemedTypography>
        Oops! The page you're looking for doesn't exist.
      </ThemedTypography>
      <Button variant="primary" onClick={() => navigate("/")}>
        <ThemedTypography>Go Back Home</ThemedTypography>
      </Button>
    </Container>
  );
};

export default NotFoundPage;
