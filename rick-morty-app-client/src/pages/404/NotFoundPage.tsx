import { t } from "i18next";
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
      <h1 className="display-3 text-danger">404</h1>
      <p className="lead">{t("notFoundPage.text")}</p>
      <Button variant="primary" onClick={() => navigate("/")}>
        {t("notFoundPage.goHomeButton")}
      </Button>
    </Container>
  );
};

export default NotFoundPage;
