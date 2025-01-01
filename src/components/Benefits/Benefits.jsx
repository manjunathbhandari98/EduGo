/* eslint-disable no-unused-vars */
import React from "react";
import {
  Clock,
  Globe2,
  Users,
  GraduationCap,
  Headphones,
  Wallet,
} from "lucide-react";
import BenefitCard from "./BenefitCard";

const benefits = [
  {
    icon: Clock,
    title: "Flexible Learning",
    description:
      "Learn at your own pace with 24/7 access to courses and materials from anywhere in the world.",
  },
  {
    icon: Globe2,
    title: "Global Community",
    description:
      "Join a diverse community of learners and expand your network across different countries and cultures.",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description:
      "Learn from industry professionals with years of real-world experience in their respective fields.",
  },
  {
    icon: GraduationCap,
    title: "Recognized Certificates",
    description:
      "Earn industry-recognized certificates to showcase your skills and boost your career prospects.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Get help when you need it with our responsive support team and active community forums.",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    description:
      "Access quality education at competitive prices with flexible payment options and money-back guarantee.",
  },
];

const Benefits = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose EduGo
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the advantages that make
            EduGo the preferred choice for online
            learning, helping you achieve your
            goals faster and more effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              {...benefit}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
