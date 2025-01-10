import React from "react";
import Footer from "components/molecules/Footer/Footer";
import Header from "components/molecules/Header/Header";
import { Outlet } from "react-router-dom";
import style from "./SharedLayout.module.scss";

const SharedLayout: React.FC = () => {
  return (
    <div className={style.layout}>
      <Header />
      <main className={style.content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SharedLayout;
