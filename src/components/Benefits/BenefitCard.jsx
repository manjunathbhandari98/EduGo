/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const BenefitCard = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-start p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="p-3 bg-blue-50 rounded-lg mb-4">
        <Icon className="w-6 h-6 text-green-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default BenefitCard;
