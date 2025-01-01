/* eslint-disable react/prop-types */
import { GraduationCap } from "lucide-react";

const EduGoLogo = () => {
  return (
    <div className="flex items-center space-x-1">
      {/* Icon: Graduation Cap */}
      <GraduationCap className="w-7 h-7 md:w-11 md:h-11" />

      {/* Brand Name */}
      <div className="md:text-4xl text-2xl font-bold text-green-800">
        Edu
        <span className="text-green-600">Go</span>
      </div>
    </div>
  );
};

export default EduGoLogo;
