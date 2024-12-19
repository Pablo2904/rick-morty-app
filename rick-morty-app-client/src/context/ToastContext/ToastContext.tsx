import React, { createContext, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ToastType = "info" | "success" | "error";

//interfaces
interface ToastContextProps {
  showToast: (type: ToastType, message: string, duration?: number) => void;
}

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

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};
