/* eslint-disable react/prop-types */
const Button = ({ buttonLabel, className }) => {
  return (
    <button
      className={`w-full py-3 px-6 bg-green-700 text-white text-lg font-semibold rounded-l shadow-md 
              hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-500 transition duration-300 
              transform hover:scale-105 active:scale-95 ${className}`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
