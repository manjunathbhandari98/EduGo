/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import EduGoLogo from "../EduLogo";
import SearchBar from "../SearchBar"; // Updated import path
import NavbarLoggedIn from "./NavbarLoggedIn";
import NavbarLoggedOut from "./NavbarLoggedOut";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useState } from "react";
import { Menu, ShoppingCart } from "lucide-react";
import SideBar from "../Sidbar/SideBar";

const Navbar = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  };

  const closeSideMenu = () => {
    setToggle(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white">
      {/* Sidebar */}
      <SideBar
        isOpen={toggle}
        closeSideMenu={closeSideMenu}
      />

      {/* Navbar */}
      <nav className="flex justify-between text-[14px] items-center p-4 text-green-700">
        {/* Left Section: Logo and Menu */}
        <div className="flex items-center space-x-4 gap-5">
          <button
            className="lg:hidden text-black"
            onClick={showSideMenu}
          >
            <Menu />
          </button>
          <Link to="/">
            <EduGoLogo />
          </Link>
        </div>

        {/* Right Section: Search Bar and Auth Links */}
        <div className="flex  items-center md:justify-center justify-end flex-grow md:space-x-4 space-x-7">
          <ShoppingCart className="lg:hidden text-black" />
          <SearchBar className="w-full md:w-auto" />
          <div className="hidden md:flex items-center space-x-6 font-semibold">
            {isLoggedIn ? (
              <NavbarLoggedIn />
            ) : (
              <NavbarLoggedOut />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
