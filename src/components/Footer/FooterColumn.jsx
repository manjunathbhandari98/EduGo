/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const FooterColumn = ({ title, links }) => {
  return (
    <div className="flex flex-col space-y-3">
      <h3 className="font-semibold text-gray-100 text-lg">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.href}
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
