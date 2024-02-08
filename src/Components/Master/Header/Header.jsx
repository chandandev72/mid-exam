import React from "react";
import TopHeader from "./TopHeader";
import logo from "/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import ProfileNavbar from "./ProfileNavbar/ProfileNavbar";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <div className="">
      <TopHeader />
      <div className="nav-section relative sm:flex justify-between items-center bg-white dark:bg-black text-light mt-1 px-2">
        <div className="logo lg:w-1/4 w-full">
          <Link to={"/"}><img className="cursor-pointer h-[100px] sm:h[150px] mx-auto sm:mx-0" src={logo} alt="Logo" /></Link>
        </div>
        <div className="navbar w-3/4 hidden lg:block">
          <Navbar />
        </div>
        <ProfileNavbar />
      </div>
    </div>
  );
};

export default Header;
