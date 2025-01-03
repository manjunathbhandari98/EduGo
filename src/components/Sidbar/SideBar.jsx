/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {
  useContext,
  useEffect,
} from "react";
import { AuthContext } from "../../contexts/AuthContext";
import SidebarOptions from "./SidebarOptions";
import ButtonLink from "../Buttons/ButtonLink";
import { IoCloseOutline } from "react-icons/io5";

const SideBar = ({ isOpen, closeSideMenu }) => {
  const { isLoggedIn, setIsLoggedIn } =
    useContext(AuthContext);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }

    // Cleanup to reset on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-60 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={closeSideMenu}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-72 bg-white shadow-lg transform ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full"
        } transition-transform duration-200`}
      >
        <div
          className="closebtn flex justify-end my-3 mx-5"
          onClick={closeSideMenu}
        >
          <button>
            <IoCloseOutline className="w-9 h-9" />
          </button>
        </div>
        <div className="flex flex-col h-full ">
          {isLoggedIn ? (
            // logged in options
            <div className="logged-in flex flex-col">
              {" "}
              <div className="flex flex-col space-y-3 mx-4">
                <ButtonLink to="/my-courses">
                  My Courses
                </ButtonLink>
                <ButtonLink to="/dashboard">
                  Dashboard
                </ButtonLink>
                <ButtonLink to="/community">
                  Forum
                </ButtonLink>
              </div>
              <div className="auth-btn flex flex-col gap-2 mx-4 my-4">
                <ButtonLink
                  onClick={closeSideMenu}
                  to="/profile"
                  className="border-green-900 border px-4 py-2 text-[15px] rounded text-green-900 text-center font-bold"
                >
                  Profile
                </ButtonLink>
                <ButtonLink
                  onClick={() => {
                    closeSideMenu;
                    setIsLoggedIn(false);
                  }}
                  to="/"
                  className="bg-green-600 px-4 py-2 rounded text-center text-white"
                >
                  Log Out
                </ButtonLink>
              </div>{" "}
            </div>
          ) : (
            // logged out options
            <div className="logged-out flex flex-col">
              <div>
                <SidebarOptions
                  text="Pricing"
                  route="pricing"
                  onClick={closeSideMenu}
                  className="sidebar-item"
                />
                <SidebarOptions
                  text="Courses"
                  route="courses"
                  onClick={closeSideMenu}
                  className="sidebar-item"
                />
              </div>

              {/* Auth buttons at the bottom */}
              <div className="auth-btn flex flex-col gap-2 mx-2 my-3">
                <ButtonLink
                  onClick={closeSideMenu}
                  to="/login"
                  className="border-green-900 border px-4 py-2 text-[15px] rounded text-green-900 text-center font-bold"
                >
                  Log In
                </ButtonLink>
                <ButtonLink
                  onClick={closeSideMenu}
                  to="/signup"
                  className="bg-green-600 px-4 py-2 rounded text-center text-white"
                >
                  Sign Up
                </ButtonLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
