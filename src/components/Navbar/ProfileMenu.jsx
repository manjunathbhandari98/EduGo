/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import {
  BsPerson,
  BsGear,
  BsPower,
} from "react-icons/bs";
import { AiFillAppstore } from "react-icons/ai";
import { BiMessageSquareDots } from "react-icons/bi";
import {
  MdOutlineSubscriptions,
  MdOutlineLanguage,
} from "react-icons/md";
import { TbReportMoney } from "react-icons/tb";

// Profile Menu Component
const ProfileMenu = ({
  setIsLoggedIn,
  viewProfile,
  toggleProfileMenu,
}) => {
  return (
    <ul
      className={`absolute ${
        viewProfile ? "block" : "hidden"
      } mt-2 right-0 bg-white text-black p-4 rounded-xl shadow-lg w-60 space-y-3 z-50`}
    >
      <li>
        <Link
          to="/profile"
          className="flex items-center space-x-2 hover:text-green-600"
          onClick={toggleProfileMenu}
        >
          <BsPerson className="text-lg" />
          <span>My Profile</span>
        </Link>
      </li>
      <li>
        <Link
          to="/profile"
          className="flex items-center space-x-2 hover:text-green-600"
          onClick={toggleProfileMenu}
        >
          <MdOutlineSubscriptions className="text-lg" />
          <span>Subscriptions</span>
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard"
          className="flex items-center space-x-2 hover:text-green-600"
          onClick={toggleProfileMenu}
        >
          <AiFillAppstore className="text-lg" />
          <span>Dashboard</span>
        </Link>
      </li>
      <li>
        <Link
          to="/pricing"
          className="flex items-center space-x-2 hover:text-green-600"
          onClick={toggleProfileMenu}
        >
          <TbReportMoney className="text-lg" />
          <span>Pricing</span>
        </Link>
      </li>
      <li>
        <Link
          to="/profile"
          className="flex items-center space-x-2 hover:text-green-600"
          onClick={toggleProfileMenu}
        >
          <MdOutlineLanguage className="text-lg" />
          <span>Language</span>
        </Link>
      </li>
      <li>
        <Link
          to="/messages"
          className="flex items-center space-x-2 hover:text-green-600"
          onClick={toggleProfileMenu}
        >
          <BiMessageSquareDots className="text-lg" />
          <span>Messages</span>
        </Link>
      </li>
      <li>
        <Link
          to="/settings"
          className="flex items-center space-x-2 hover:text-green-600"
          onClick={toggleProfileMenu}
        >
          <BsGear className="text-lg" />
          <span>Settings</span>
        </Link>
      </li>
      <li>
        <button
          onClick={() => {
            setIsLoggedIn(false);
            toggleProfileMenu(); // Hide the profile menu
          }}
          className="flex items-center space-x-2 hover:text-green-600"
        >
          <BsPower className="text-lg" />
          <span>Logout</span>
        </button>
      </li>
    </ul>
  );
};

export default ProfileMenu;
