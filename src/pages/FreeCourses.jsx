/* eslint-disable no-unused-vars */
import CourseCard from "../components/CourseCard";
import {
  GraduationCap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRef, useState } from "react";

const FreeCourses = () => {
  const freeCourses = [
    {
      title: "Introduction to HTML & CSS",
      instructor: "Chris Adams",
      duration: "10 hours",
      students: 8000,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1561070800-3fd9268f774e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Basics of Python Programming",
      instructor: "Sarah Thompson",
      duration: "15 hours",
      students: 12000,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1581091870625-7c0b8bb8db0b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Learn Git & GitHub",
      instructor: "David Young",
      duration: "8 hours",
      students: 9500,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1573157941625-8fdd72b58e8e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Introduction to Web Development",
      instructor: "Alice Walker",
      duration: "12 hours",
      students: 15000,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Learn SQL for Beginners",
      instructor: "Michael Harris",
      duration: "20 hours",
      students: 10000,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1589577300133-10ea95bc34d7?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Introduction to Java Programming",
      instructor: "Olivia Brown",
      duration: "18 hours",
      students: 8000,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1583281532493-2e2620ec10f4?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Digital Marketing Basics",
      instructor: "John Martin",
      duration: "25 hours",
      students: 9500,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1593642634349-34eaff51d0ee?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Learn Adobe Photoshop",
      instructor: "Emma Johnson",
      duration: "30 hours",
      students: 11000,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1529982640198-5105b6e2f517?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Introduction to Data Science",
      instructor: "Sophia White",
      duration: "22 hours",
      students: 13000,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1573497019354-c6e3f8774ca4?auto=format&fit=crop&w=800&q=80",
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
    if (currentIndex < freeCourses.length - 3) {
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
          Free Courses
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
            {freeCourses.map((course, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ width: 300 }}
              >
                <CourseCard {...course} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          className={`absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 z-10 ${
            currentIndex >= freeCourses.length - 3
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={scrollRight}
          disabled={
            currentIndex >= freeCourses.length - 3
          }
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default FreeCourses;
