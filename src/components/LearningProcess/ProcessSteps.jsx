/* eslint-disable react/prop-types */

const ProcessSteps = ({
  icon: Icon,
  title,
  description,
  stepNumber,
}) => {
  return (
    <div className="relative flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4 relative">
        <Icon className="w-8 h-8 text-white" />
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
          {stepNumber}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default ProcessSteps;
