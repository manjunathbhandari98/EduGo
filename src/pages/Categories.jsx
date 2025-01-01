/* eslint-disable no-unused-vars */
import React from "react";
import {
  Code2,
  Palette,
  Calculator,
  BookOpen,
  Microscope,
  Globe2,
  Music2,
  HeartPulse,
  Building2,
  BadgeDollarSign,
  Camera,
  Speech,
} from "lucide-react";
import CategoryCard from "../components/CategoryCard";

const categories = [
  {
    icon: Code2,
    name: "Computer Science",
    description:
      "Programming, Web Development, and Software Engineering",
    courseCount: 450,
  },
  {
    icon: Palette,
    name: "Design & Arts",
    description:
      "Graphic Design, UI/UX, and Digital Art",
    courseCount: 380,
  },
  {
    icon: Calculator,
    name: "Mathematics",
    description:
      "Algebra, Calculus, and Statistics",
    courseCount: 320,
  },
  {
    icon: BookOpen,
    name: "Literature",
    description:
      "Creative Writing, Poetry, and Literary Analysis",
    courseCount: 280,
  },
  {
    icon: Microscope,
    name: "Science",
    description:
      "Physics, Chemistry, and Biology",
    courseCount: 400,
  },
  {
    icon: Globe2,
    name: "Languages",
    description:
      "English, Spanish, Mandarin, and more",
    courseCount: 520,
  },
  {
    icon: Music2,
    name: "Music",
    description:
      "Theory, Instruments, and Production",
    courseCount: 250,
  },
  {
    icon: HeartPulse,
    name: "Health & Fitness",
    description:
      "Nutrition, Exercise, and Wellness",
    courseCount: 300,
  },
  {
    icon: Building2,
    name: "Business",
    description:
      "Management, Marketing, and Entrepreneurship",
    courseCount: 480,
  },
  {
    icon: BadgeDollarSign,
    name: "Finance",
    description:
      "Investment, Accounting, and Economics",
    courseCount: 340,
  },
  {
    icon: Camera,
    name: "Photography",
    description:
      "Digital Photography, Editing, and Composition",
    courseCount: 220,
  },
  {
    icon: Speech,
    name: "Social Sciences",
    description:
      "Psychology, Sociology, and Anthropology",
    courseCount: 360,
  },
];

const Categories = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover a world of knowledge across
            various fields. Choose from our
            extensive collection of courses taught
            by expert instructors.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              {...category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
