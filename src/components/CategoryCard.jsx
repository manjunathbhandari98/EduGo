/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const CategoryCard = ({
  icon: Icon,
  name,
  description,
  courseCount,
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md  hover:shadow-lg transition-shadow duration-300 border border-gray-100 cursor-pointer">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-blue-50 rounded-lg">
          <Icon className="w-6 h-6 text-green-700" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-gray-800">
            {name}
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            {description}
          </p>
          <p className="text-sm text-green-700 mt-2">
            {courseCount} courses
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
