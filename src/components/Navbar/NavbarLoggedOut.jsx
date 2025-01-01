/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import ButtonLink from "../Buttons/ButtonLink";

const NavbarLoggedOut = () => {
  return (
    <>
      <ButtonLink to="/pricing">
        Pricing
      </ButtonLink>
      <ButtonLink to="/courses">
        Courses
      </ButtonLink>
      <ButtonLink
        to="/login"
        className="border-green-900 border px-4 py-2 text-[15px] rounded text-green-900 font-bold"
      >
        Log In
      </ButtonLink>
      <ButtonLink
        to="/signup"
        className="bg-green-600 px-4 py-2 rounded text-white"
      >
        Sign Up
      </ButtonLink>
    </>
  );
};

export default NavbarLoggedOut;
