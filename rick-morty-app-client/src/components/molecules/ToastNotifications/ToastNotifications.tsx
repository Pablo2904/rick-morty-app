import React from "react";
import { toast, ToastOptions, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ToastType = "info" | "success" | "error";

interface ToastProps {
  type: ToastType;
  message: string;
  duration?: number;
}

//Opcje toastów

export const showToast = ({ type, message, duration = 3000 }: ToastProps) => {
  const toastOptions: ToastOptions = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  if (type === "info") {
    toast.info(message, toastOptions);
  }

  if (type === "success") {
    toast.success(message, toastOptions);
  }

  if (type === "error") {
    toast.error(message, toastOptions);
  }
};

// Główny kontener dla toastów
const ToastNotifications: React.FC = () => {
  return <ToastContainer />;
};

export default ToastNotifications;
