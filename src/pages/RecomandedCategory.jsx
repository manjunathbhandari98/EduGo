import {
  IoBusiness,
  IoFitness,
} from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import {
  FaChartLine,
  FaDatabase,
  FaBullhorn,
  FaDollarSign,
  FaLaptopCode,
  FaCamera,
} from "react-icons/fa";

const RecommendedCategory = () => {
  const categories = [
    {
      name: "Business Management",
      link: "https://demo.edugo.co/course-category/business/",
      iconClass: IoBusiness, // Directly use the imported React Icon component
      borderColor: "border-blue-500", // Blue border
    },
    {
      name: "Arts & Design",
      link: "https://demo.edugo.co/course-category/online-art/",
      iconClass: MdDesignServices, // You can replace with actual icon component if available
      borderColor: "border-green-500", // Green border
    },
    {
      name: "Personal Development",
      link: "https://demo.edugo.co/course-category/motivation/",
      iconClass: FaChartLine, // Use appropriate icon component here
      borderColor: "border-yellow-500", // Yellow border
    },
    {
      name: "Health & Fitness",
      link: "https://demo.edugo.co/course-category/fitness/",
      iconClass: IoFitness, // Use appropriate icon component here
      borderColor: "border-red-500", // Red border
    },
    {
      name: "Data Science",
      link: "https://demo.edugo.co/course-category/digital-marketing/",
      iconClass: FaDatabase, // Use appropriate icon component here
      borderColor: "border-purple-500", // Purple border
    },
    {
      name: "Marketing",
      link: "https://demo.edugo.co/course-category/digital-marketing/",
      iconClass: FaBullhorn, // Use appropriate icon component here
      borderColor: "border-indigo-500", // Indigo border
    },
    {
      name: "Business & Finance",
      link: "https://demo.edugo.co/course-category/business/",
      iconClass: FaDollarSign, // Use appropriate icon component here
      borderColor: "border-teal-500", // Teal border
    },
    {
      name: "Computer Science",
      link: "https://demo.edugo.co/course-category/programming/",
      iconClass: FaLaptopCode, // Use appropriate icon component here
      borderColor: "border-pink-500", // Pink border
    },
    {
      name: "Video & Photography",
      link: "https://demo.edugo.co/course-category/photography/",
      iconClass: FaCamera, // Use appropriate icon component here
      borderColor: "border-orange-500", // Orange border
    },
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold text-gray-800">
          Recommended Categories
        </h3>
        <div className="title-shape mx-auto my-2 w-12 h-1 bg-green-500"></div>
        <p className="text-gray-600 text-lg">
          Start your learning journey here! Browse
          our recommended categories and find the
          perfect courses for you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`flex gap-5 text-[15px] items-center p-6 ${category.borderColor} rounded-lg shadow-lg hover:shadow-xl transition-all duration-300`}
          >
            <div className="text-2xl mb-4">
              {/* Render the icon component here */}
              <category.iconClass />
            </div>
            <h5 className="font-semibold text-gray-800 mb-4">
              <a
                href={category.link}
                className="hover:text-blue-600"
              >
                {category.name}
              </a>
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedCategory;
