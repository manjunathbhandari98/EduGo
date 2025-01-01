/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Star, Quote } from "lucide-react";

const ReviewCard = ({
  name,
  image,
  role,
  rating,
  review,
  course,
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg relative">
      <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-100" />
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-900">
            {name}
          </h4>
          <p className="text-sm text-gray-600">
            {role}
          </p>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-3">
        {review}
      </p>
      <p className="text-sm text-green-700 font-medium">
        Course: {course}
      </p>
    </div>
  );
};

export default ReviewCard;
