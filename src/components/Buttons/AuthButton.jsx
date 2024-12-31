/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const AuthButton = ({ icon }) => {
  return (
    <div className="mb-6">
      <button className=" py-1 px-1 text-black border border-black rounded-l flex items-center justify-center space-x-3  focus:outline-none">
        <img
          src={icon}
          alt=""
          className="w-8 h-8"
        />
      </button>
    </div>
  );
};

export default AuthButton;
