import React, { createContext, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ToastType = "info" | "success" | "error";

//interfaces
interface ToastMessages {
  [key: string]: { type: ToastType; message: string };
}

interface ToastContextProps {
  showToast: (type: ToastType, message: string, duration?: number) => void;
  showPredefinedToast: (key: string, duration?: number) => void;
}

const predefinedMessages: ToastMessages = {
  infoMessage: { type: "info", message: "This is an informational message!" },
  successMessage: {
    type: "success",
    message: "Your changes were saved successfully!",
  },
  errorMessage: {
    type: "error",
    message: "Something went wrong. Please try again.",
  },
};

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

//Provider dla Toast
export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const showToast = (type: ToastType, message: string, duration = 3000) => {
    const commonOptions = {
      autoClose: duration,
      closeOnClick: true,
    };

    switch (type) {
      case "info":
        toast.info(message, commonOptions);
        break;
      case "success":
        toast.success(message, commonOptions);
        break;
      case "error":
        toast.error(message, commonOptions);
        break;
      default:
        toast(message, commonOptions);
        break;
    }
  };

  const showPredefinedToast = (key: string, duration = 3000) => {
    const predefined = predefinedMessages[key];
    if (predefined) {
      showToast(predefined.type, predefined.message, duration);
    } else {
      console.error(`No predefined message found for key: ${key}`);
    }
  };

  return (
    <ToastContext.Provider value={{ showToast, showPredefinedToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};
