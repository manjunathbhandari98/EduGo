/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import EduGoLogo from "../EduLogo";
import SearchBar from "../SearchBar"; // Updated import path
import NavbarLoggedIn from "./NavbarLoggedIn";
import NavbarLoggedOut from "./NavbarLoggedOut";

const Navbar = ({
  isLoggedIn,
  setIsLoggedIn,
}) => {
  return (
    <nav className="flex justify-between items-center p-4 text-green-700">
      <div className="flex items-center space-x-4 gap-5">
        <Link
          to="/"
          className="text-3xl font-bold"
        >
          <EduGoLogo />
        </Link>
        <SearchBar />
      </div>
      <div className="flex items-center space-x-8 mx-3 font-bold">
        {isLoggedIn ? (
          <NavbarLoggedIn
            setIsLoggedIn={setIsLoggedIn}
          />
        ) : (
          <NavbarLoggedOut
            setIsLoggedIn={setIsLoggedIn}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
