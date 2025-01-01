/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import {
  IoMdNotificationsOutline,
  IoMdNotifications,
} from "react-icons/io";

const NavbarLoggedIn = ({ setIsLoggedIn }) => {
  const [viewProfile, setViewProfile] =
    useState(false);
  const [
    isNotificationTapped,
    setIsNotificationTapped,
  ] = useState(false);

  const toggleProfileMenu = () => {
    setViewProfile((prevState) => !prevState);
  };

  const notificationTapped = () => {
    setIsNotificationTapped(
      (prevState) => !prevState
    );
  };

  return (
    <>
      <Link to="/my-courses">My Courses</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/community">Forum</Link>
      <Link
        to="/cart"
        className="relative text-[25px]"
      >
        <LuShoppingCart />
      </Link>
      <div
        className="relative text-[25px]"
        onClick={notificationTapped}
      >
        {!isNotificationTapped ? (
          <button className="focus:outline-none">
            <IoMdNotificationsOutline />
          </button>
        ) : (
          <button className="focus:outline-none">
            <IoMdNotifications />
          </button>
        )}
      </div>
      <div className="relative">
        <button
          onClick={toggleProfileMenu}
          className="focus:outline-none bg-green-900 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center"
        >
          M
        </button>
        <ul
          className={`absolute ${
            viewProfile ? "block" : "hidden"
          } mt-2 right-0 bg-white text-black p-2 rounded shadow-lg w-max space-y-2 z-50`}
        >
          <li>
            <Link to="/profile">My Profile</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setIsLoggedIn(false);
                setViewProfile(false); // Hide the profile menu
              }}
              to="/"
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarLoggedIn;
