import ReviewCard from "./ReviewCard";

const reviews = [
  {
    name: "Sarah Johnson",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    role: "UX Designer",
    rating: 5,
    review:
      "The UI/UX Design course completely transformed my career. The practical projects and mentor feedback were invaluable.",
    course: "Advanced UI/UX Design",
  },
  {
    name: "Michael Chen",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    role: "Software Developer",
    rating: 5,
    review:
      "Excellent React course! The instructor's teaching style and real-world examples made complex concepts easy to understand.",
    course: "React Masterclass",
  },
  {
    name: "Emily Rodriguez",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    role: "Data Analyst",
    rating: 4,
    review:
      "The Data Science bootcamp provided me with the skills I needed to transition into analytics. Great community support!",
    course: "Data Science Fundamentals",
  },
];

const Reviews = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {` Join thousands of satisfied students
            who have transformed their careers
            through our courses. Here's what they
            have to say about their learning`}
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              {...review}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-lg shadow-sm">
            <div className="flex -space-x-2">
              {reviews.map((review, index) => (
                <img
                  key={index}
                  src={review.image}
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <p className="text-gray-700">
              <span className="font-semibold text-green-600">
                50,000+
              </span>{" "}
              students already enrolled
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
