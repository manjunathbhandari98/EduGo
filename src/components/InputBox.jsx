/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const InputBox = ({ type, className }) => {
  return (
    <input
      type={type}
      className={`rounded ${className}`}
    />
  );
};

export default InputBox;
