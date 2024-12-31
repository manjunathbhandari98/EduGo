/* eslint-disable react/prop-types */
const Button = ({ buttonLabel, className }) => {
  return (
    <button className={`rounded ${className}`}>
      {buttonLabel}
    </button>
  );
};

export default Button;
