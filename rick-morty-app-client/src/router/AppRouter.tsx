import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "pages/Home/HomePage";
import AboutPage from "pages/About/AboutPage";
import NotFoundPage from "pages/404/NotFoundPage";
import EnhancedErrorBoundary from "utilities/ErrorBoundary/EnhancedErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <EnhancedErrorBoundary>
        <HomePage />
      </EnhancedErrorBoundary>
    ),
  },
  {
    path: "/about",
    element: (
      <EnhancedErrorBoundary>
        <AboutPage />
      </EnhancedErrorBoundary>
    ),
  },
  {
    path: "*",
    element: (
      <EnhancedErrorBoundary>
        <NotFoundPage />
      </EnhancedErrorBoundary>
    ),
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
