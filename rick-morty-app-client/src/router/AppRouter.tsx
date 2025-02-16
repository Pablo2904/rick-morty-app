import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "pages/Home/HomePage";
import AboutPage from "pages/About/AboutPage";
import NotFoundPage from "pages/404/NotFoundPage";
import EnhancedErrorBoundary from "utilities/ErrorBoundary/EnhancedErrorBoundary";
import SharedLayout from "components/templates/SharedLayout/SharedLayout";

const router = createBrowserRouter([
  {
    //Parent Route
    path: "/",
    element: (
      <EnhancedErrorBoundary>
        <SharedLayout />
      </EnhancedErrorBoundary>
    ),
    //Child Route
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
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
