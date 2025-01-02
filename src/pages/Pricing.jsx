import "react";
import PricingCard from "../components/PricingCard";
import PricingComparator from "../components/PricingComparator";

const Pricing = () => {
  const plans = [
    {
      planName: "LearnFlex Features",
      features: [
        {
          text: "Self-paced learning",
          available: true,
        },
        {
          text: "Interactive live classes",
          available: true,
        },
        {
          text: "Progress tracking dashboard",
          available: true,
        },
        {
          text: "Offline access to lessons",
          available: false,
        },
        {
          text: "Customizable class timings",
          available: false,
        },
      ],
    },
    {
      planName: "SkillBoost Features",
      features: [
        {
          text: "Access to 10,000+ hours of video tutorials",
          available: true,
        },
        {
          text: "Topic-based curated playlists",
          available: true,
        },
        {
          text: "Downloadable practice materials",
          available: true,
        },
        {
          text: "Personalized course recommendations",
          available: false,
        },
        {
          text: "Real-world project guides",
          available: false,
        },
      ],
    },
    {
      planName: "Certify Me Features",
      features: [
        {
          text: "Verified course completion certificates",
          available: true,
        },
        {
          text: "Certificates integrated with LinkedIn",
          available: true,
        },
        {
          text: "Grade-based certificate tiers",
          available: false,
        },
        {
          text: "Portfolio showcase assistance",
          available: false,
        },
        {
          text: "Priority certificate delivery",
          available: false,
        },
      ],
    },
  ];

  return (
    <div className="mx-5 mt-7 bg-gray-100 py-8">
      {/* Pricing Cards Section */}
      <div className="text-center my-8 ">
        <h1 className="text-3xl font-semibold text-gray-800">
          Choose the Best Plan for You
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Explore our pricing plans to find the
          right fit for your learning needs
        </p>
      </div>

      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col lg:flex-row gap-5 items-start">
          <PricingCard
            planName={plans[0].planName}
            price="49"
            duration="month"
            features={plans[0].features}
            buttonLabel="Choose Plan"
          />
          <PricingCard
            planName={plans[1].planName}
            price="69"
            duration="month"
            features={plans[1].features}
            buttonLabel="Choose Plan"
          />
          <PricingCard
            planName={plans[2].planName}
            price="99"
            duration="month"
            features={plans[2].features}
            buttonLabel="Choose Plan"
          />
        </div>
      </div>

      {/* Divider/Heading Before PricingComparator Section */}
      <div className="text-center my-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Compare Our Plans
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          {`Want to dive deeper? Here's a detailed
          comparison of all features across our
          plans.`}
        </p>
      </div>

      {/* Pricing Comparator Section */}
      <div className="justify-center items-center min-h-screen">
        <PricingComparator plans={plans} />
      </div>
    </div>
  );
};

export default Pricing;
