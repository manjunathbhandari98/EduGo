/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SidebarOptions = ({
  text,
  onClick,
  route,
  className,
}) => {
  return (
    <Link
      to={`/${route}`}
      onClick={onClick}
      className={`block px-4 py-1 text-[18px] font-semibold text-gray-800 rounded-md transition-all ${className}`}
    >
      {text}
    </Link>
  );
};

export default SidebarOptions;
