import ThemedTypography from "components/atoms/ThemedTypography/ThemedTypography";
import React, { useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const { t }: { t: (key: string) => string } = useTranslation();

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
      <ThemedTypography>{t("notFoundPage.text")}</ThemedTypography>
      <Button variant="primary" onClick={() => navigate("/")}>
        <ThemedTypography>{t("notFoundPage.goHomeButton")}</ThemedTypography>
      </Button>
    </Container>
  );
};

export default NotFoundPage;
