import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Master/Header/Header";
import Footer from "../Master/Footer/Footer";

const Main = () => {
  return (
    <div className="dark:bg-[url('/images/wood.jpg')] bg-[url('/images/flower.jpg')]">
      <div className="lg:w-[90%] w-[95%] mx-auto">
        <Header />
        <Outlet />
      </div>
        <Footer />
    </div>
  );
};

export default Main;
