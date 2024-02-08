import React, { useContext, useState } from "react";
import Google from "../SVG/Google";
import Github from "../SVG/Github";
import { AuthContext } from "../../Contexts/AuthContext";
import { Navigate, redirect, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const GoogleAndGit = () => {
  const { user, googleLogin, githubLogin } = useContext(AuthContext);
  
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (user) {
    if(location.pathname === "/login"||location.pathname === "/register"){
      return <Navigate to="/"></Navigate>
    }
  }

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        const errorMessage = err.message;
        toast.error(errorMessage)
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        console.log(result);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = err.message;
        toast.error(errorMessage)
      });
  };

  return (
    <div className="w-full mt-5">
      <div className="flex justify-center items-center gap-3">
        <span className="h-[1px] w-full bg-themeColor"></span>
        <span className="text-light">OR</span>
        <span className="h-[1px] w-full bg-themeColor"></span>
      </div>
      <div className="w-full mx-auto flex justify-center cursor-pointer">
        <span onClick={handleGoogleLogin} className="scale-125">
          <Google />
        </span>
        <span
          onClick={handleGithubLogin}
          className="bg-light rounded-full scale-75"
        >
          <Github />
        </span>
      </div>
    </div>
  );
};

export default GoogleAndGit;
