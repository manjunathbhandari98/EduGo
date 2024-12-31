/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = ({
  to,
  onClick,
  className,
  children,
}) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`focus:outline-none ${className}`}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
