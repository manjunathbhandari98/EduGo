/* eslint-disable react/prop-types */

const StatCard = ({
  icon: Icon,
  value,
  label,
}) => {
  return (
    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
      <Icon className="w-8 h-8 text-blue-400" />
      <div>
        <div className="text-xl font-bold text-white">
          {value}
        </div>
        <div className="text-sm text-gray-200">
          {label}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
