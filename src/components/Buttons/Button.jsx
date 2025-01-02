/* eslint-disable react/prop-types */
const Button = ({
  buttonLabel,
  className,
  backgroundColor = "green-700",
  color = "white",
  textSize = "lg",
  hoverColor = "green-800",
  type,
}) => {
  return (
    <button
      type={type}
      className={`w-full py-3 px-6 bg-${backgroundColor} text-${color} text-${textSize} font-semibold rounded-l shadow-md 
              hover:bg-${hoverColor} focus:outline-none focus:ring-4 focus:ring-green-500 transition duration-300 
              transform hover:scale-105 active:scale-95 ${className}`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
