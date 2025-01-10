import React from "react";
import Footer from "components/molecules/Footer/Footer";
import Header from "components/molecules/Header/Header";
import { Outlet } from "react-router-dom";

const SharedLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
