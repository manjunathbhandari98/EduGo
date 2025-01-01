/* eslint-disable no-unused-vars */
import CourseCard from "../components/CourseCard";
import {
  GraduationCap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRef, useState } from "react";

const FeaturedCourses = () => {
  const featuredCourses = [
    {
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      duration: "48 hours",
      students: 15420,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Digital Marketing Masterclass",
      instructor: "Michael Chen",
      duration: "32 hours",
      students: 8750,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "UI/UX Design Fundamentals",
      instructor: "Emma Davis",
      duration: "24 hours",
      students: 12300,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Introduction to Machine Learning",
      instructor: "Liam Johnson",
      duration: "36 hours",
      students: 13000,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Creative Writing Workshop",
      instructor: "Olivia White",
      duration: "18 hours",
      students: 6200,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Advanced Excel for Professionals",
      instructor: "Ethan Martinez",
      duration: "16 hours",
      students: 8200,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Social Media Strategies for Growth",
      instructor: "Ava Wilson",
      duration: "22 hours",
      students: 7700,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Full-Stack Web Development",
      instructor: "John Smith",
      duration: "40 hours",
      students: 15000,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Python for Data Science",
      instructor: "Samantha Green",
      duration: "35 hours",
      students: 11000,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1517430816045-df4b7de2f42d?auto=format&fit=crop&w=800&q=80",
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
      featuredCourses.length - 3
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
          Featured Courses
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
            {featuredCourses.map(
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
            featuredCourses.length - 3
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={scrollRight}
          disabled={
            currentIndex >=
            featuredCourses.length - 3
          }
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default FeaturedCourses;
