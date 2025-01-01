/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { forwardRef } from "react";

const InputBox = forwardRef(
  (
    { type, className, placeholder, ...props },
    ref
  ) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        ref={ref}
        {...props}
        className={`w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-l border border-gray-300 ${className}`}
      />
    );
  }
);

// Setting display name for debugging
InputBox.displayName = "InputBox";

export default InputBox;

//
