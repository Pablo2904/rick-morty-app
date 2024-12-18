import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "pages/Home/HomePage";
import AboutPage from "pages/About/AboutPage";
import NotFoundPage from "pages/404/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />, // Obsługa nieistniejących stron
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
