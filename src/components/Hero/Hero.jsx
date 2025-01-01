/* eslint-disable no-unused-vars */
import React from "react";
import {
  Users,
  BookOpen,
  Trophy,
  Timer,
} from "lucide-react";
import StatCard from "./StatCard";

const stats = [
  {
    icon: Users,
    value: "50K+",
    label: "Active Students",
  },
  {
    icon: BookOpen,
    value: "1000+",
    label: "Courses",
  },
  {
    icon: Trophy,
    value: "100+",
    label: "Expert Instructors",
  },
  {
    icon: Timer,
    value: "24/7",
    label: "Learning Access",
  },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 sm:py-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Unlock Your Potential with
            <span className="text-blue-400">
              {" "}
              Online Learning
            </span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Access world-class education from
            anywhere. Learn from industry experts
            and advance your career with our
            flexible online courses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button
              className="px-8 py-3 bg-blue-500 text-white rounded-full font-semibold 
                           hover:bg-blue-600 transition-colors duration-200"
            >
              Get Started
            </button>
            <button
              className="px-8 py-3 bg-white/10 text-white rounded-full font-semibold 
                           hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm"
            >
              Browse Courses
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              {...stat}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
