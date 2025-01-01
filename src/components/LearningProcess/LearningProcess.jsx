import {
  Search,
  BookOpen,
  MessageSquare,
  Award,
} from "lucide-react";
import ProcessStep from "./ProcessSteps";

const steps = [
  {
    icon: Search,
    title: "Discover Your Path",
    description:
      "Browse our extensive catalog of courses and choose the perfect learning path tailored to your goals.",
    stepNumber: 1,
  },
  {
    icon: BookOpen,
    title: "Learn at Your Pace",
    description:
      "Access high-quality video lessons, interactive exercises, and practical projects anytime, anywhere.",
    stepNumber: 2,
  },
  {
    icon: MessageSquare,
    title: "Get Expert Support",
    description:
      "Connect with instructors and peers, join live sessions, and get personalized feedback on your progress.",
    stepNumber: 3,
  },
  {
    icon: Award,
    title: "Earn Certification",
    description:
      "Complete your courses, showcase your skills, and receive industry-recognized certificates.",
    stepNumber: 4,
  },
];

const LearningProcess = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How Learning Works on EduGo
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our structured learning approach
            ensures you get the most out of your
            educational journey. Follow these
            simple steps to start your
            transformation today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -translate-y-1/2" />

          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              {...step}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            className="px-8 py-3 bg-green-700 text-white rounded-full font-semibold 
                         hover:bg-green-700 transition-colors duration-200"
          >
            Start Learning Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default LearningProcess;
