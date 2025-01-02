/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import {
  IoMdNotificationsOutline,
  IoMdNotifications,
} from "react-icons/io";
import ProfileMenu from "./ProfileMenu";
import Notifications from "../Notifications";

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
      <Link
        to="/my-courses"
        className="text-gray-700 hover:text-green-600"
      >
        My courses
      </Link>
      <Link
        to="/dashboard"
        className="text-gray-700 hover:text-green-600"
      >
        Dashboard
      </Link>
      <Link
        to="/community"
        className="text-gray-700 hover:text-green-600"
      >
        Forum
      </Link>
      <Link
        to="/cart"
        className="relative text-[25px] text-black"
      >
        <LuShoppingCart />
      </Link>

      {/* Notification Button */}
      <div
        className="relative text-[25px]"
        onClick={notificationTapped}
      >
        {!isNotificationTapped ? (
          <button className="focus:outline-none text-black">
            <IoMdNotificationsOutline />
          </button>
        ) : (
          <button className="focus:outline-none text-green-700">
            <IoMdNotifications />
          </button>
        )}
      </div>

      {/* Conditional Notification Popup */}
      {isNotificationTapped && (
        <div className="absolute top-20 right- w-80 p-4 bg-white border rounded-lg shadow-lg z-50">
          <Notifications />{" "}
          {/* This will display the Notifications component */}
        </div>
      )}

      <div className="relative">
        <button
          onClick={toggleProfileMenu}
          className="focus:outline-none bg-green-800 text-white rounded-full p-3 w-9 h-9 flex items-center justify-center hover:bg-green-700 transition-colors"
        >
          M
        </button>
        {/* Profile Menu Popup */}
        <ProfileMenu
          setIsLoggedIn={setIsLoggedIn}
          viewProfile={viewProfile}
          toggleProfileMenu={toggleProfileMenu}
        />
      </div>
    </>
  );
};

export default NavbarLoggedIn;
