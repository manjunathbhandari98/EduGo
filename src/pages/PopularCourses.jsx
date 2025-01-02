/* eslint-disable no-unused-vars */
import CourseCard from "../components/CourseCard";
import {
  GraduationCap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRef, useState } from "react";

const PopularCourses = () => {
  const popularCourses = [
    {
      title: "Mastering JavaScript for Beginners",
      instructor: "Alex Brown",
      duration: "40 hours",
      students: 20500,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Data Science with Python",
      instructor: "Emily Davis",
      duration: "50 hours",
      students: 19500,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1517430816045-df4b7de2f42d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title:
        "Advanced Digital Marketing Techniques",
      instructor: "David Green",
      duration: "35 hours",
      students: 15000,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Introduction to Cloud Computing",
      instructor: "Sophia Turner",
      duration: "30 hours",
      students: 17000,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Photography for Beginners",
      instructor: "James Wilson",
      duration: "20 hours",
      students: 8000,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Machine Learning with R",
      instructor: "John Smith",
      duration: "45 hours",
      students: 13000,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Graphic Design for Beginners",
      instructor: "Alice Johnson",
      duration: "25 hours",
      students: 11000,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    },
    {
      title:
        "Full Stack Development with Node.js",
      instructor: "Daniel Harris",
      duration: "50 hours",
      students: 19000,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Excel for Data Analysis",
      instructor: "Sarah Lee",
      duration: "18 hours",
      students: 10500,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] =
    useState(0);

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (
      currentIndex <
      popularCourses.length - 3
    ) {
      setCurrentIndex(currentIndex + 1);
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="m-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Popular Courses
        </h2>
        <button className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center">
          <span>View All</span>
          <GraduationCap className="ml-2 h-5 w-5" />
        </button>
      </div>
      <div className="relative">
        {/* Left Button */}
        <button
          className={`absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 z-10 ${
            currentIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={scrollLeft}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </button>

        {/* Scrollable Container */}
        <div
          className="flex gap-6 overflow-hidden"
          style={{ width: "100%" }}
          ref={scrollRef}
        >
          <div
            className="flex gap-5 transition-transform duration-300"
            style={{
              transform: `translateX(-${
                currentIndex * 300
              }px)`,
            }}
          >
            {popularCourses.map(
              (course, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: 300 }}
                >
                  <CourseCard {...course} />
                </div>
              )
            )}
          </div>
        </div>

        {/* Right Button */}
        <button
          className={`absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 z-10 ${
            currentIndex >=
            popularCourses.length - 3
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={scrollRight}
          disabled={
            currentIndex >=
            popularCourses.length - 3
          }
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default PopularCourses;
