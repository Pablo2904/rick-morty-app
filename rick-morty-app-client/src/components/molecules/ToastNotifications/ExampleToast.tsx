import React from "react";
import { Button } from "react-bootstrap";
import { showToast } from "./ToastNotifications";

const ExampleToast: React.FC = () => {
  return (
    <div>
      <Button
        variant="info"
        onClick={() =>
          showToast({
            type: "info",
            message: "This is an informational message.",
          })
        }
      >
        Show Info Toast
      </Button>
      <Button
        variant="success"
        onClick={() =>
          showToast({
            type: "success",
            message: "Your changes were saved successfully.",
          })
        }
      >
        Show Success Toast
      </Button>
      <Button
        variant="danger"
        onClick={() =>
          showToast({
            type: "error",
            message: "Something went wrong. Please try again.",
          })
        }
      >
        Show Error Toast
      </Button>
    </div>
  );
};

export default ExampleToast;
