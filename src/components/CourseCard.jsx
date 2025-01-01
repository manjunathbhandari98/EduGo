/* eslint-disable react/prop-types */
import { Clock, Users, Star } from "lucide-react";

const CourseCard = ({
  image,
  title,
  instructor,
  duration,
  students,
  rating,
}) => {
  return (
    <div className="bg-white rounded-xl h-[360px] shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">
          {instructor}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>
              {students.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center text-yellow-500">
            <Star className="h-4 w-4 mr-1 fill-current" />
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
