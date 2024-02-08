import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../../Contexts/AuthContext";

const Navbar = () => {
  const location = useLocation();

  const { user } = useContext(AuthContext);

  const navStyle =
    "lg:text-dark hover:underline dark:text-light p-3 rounded-lg";
  return (
    <ul className="lg:flex justify-center gap-2 ">
      <li>
        <Link
          to="/"
          className={
            location.pathname === "/" ? navStyle + " active" : navStyle
          }
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/courses"
          className={
            location.pathname === "/courses" ? navStyle + " active" : navStyle
          }
        >
          Courses
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className={
            location.pathname === "/about" ? navStyle + " active" : navStyle
          }
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className={
            location.pathname === "/contact" ? navStyle + " active" : navStyle
          }
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          to="/faq"
          className={
            location.pathname === "/faq" ? navStyle + " active" : navStyle
          }
        >
          FAQ
        </Link>
      </li>
      {!user && (
        <li>
          <Link
            to="/login"
            className={
              location.pathname === "/login" ? navStyle + " active" : navStyle
            }
          >
            <em>SIGN IN / UP</em>
          </Link>
        </li>
      )}
      {/* {!user && (
        <li>
          <Link
            to="/register"
            className={
              location.pathname === "/register"
                ? navStyle + " active"
                : navStyle
            }
          >
            Register
          </Link>
        </li>
      )} */}
    </ul>
  );
};

export default Navbar;
