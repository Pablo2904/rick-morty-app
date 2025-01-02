import React from "react";
import { Button } from "react-bootstrap";
import { showToast } from "./ToastNotifications";

//i18next-react
import { useTranslation } from "react-i18next";

const ExampleToast: React.FC = () => {
  const { t }: { t: (key: string) => string } = useTranslation();
  return (
    <div>
      <Button
        variant="info"
        onClick={() =>
          showToast({
            type: "info",
            message: t("exampleToast.messageInfo"),
          })
        }
      >
        {t("exampleToast.buttonInfo")}
      </Button>
      <Button
        variant="success"
        onClick={() =>
          showToast({
            type: "success",
            message: t("exampleToast.messageSuccess"),
          })
        }
      >
        {t("exampleToast.buttonSuccess")}
      </Button>
      <Button
        variant="danger"
        onClick={() =>
          showToast({
            type: "error",
            message: t("exampleToast.messageError"),
          })
        }
      >
        {t("exampleToast.buttonError")}
      </Button>
    </div>
  );
};

export default ExampleToast;
