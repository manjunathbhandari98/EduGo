/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const InputBox = ({ type, className }) => {
  return (
    <input
      type={type}
      className={`w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-l border border-gray-300 ${className}`}
    />
  );
};

export default InputBox;
