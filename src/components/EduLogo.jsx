const EduGoLogo = () => {
  return (
    <div className="flex items-center space-x-3">
      {/* Icon: Graduation Cap */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4.5 h-4.5 text-dark-green"
      >
        {" "}
        <path d="M12 2L1 7l11 5 11-5-11-5zm0 7.5L3.5 7 12 3.5 20.5 7 12 9.5zm0 2.5l-11-5v6l11 5 11-5v-6l-11 5zm0 2.5l-7-3.5v4.5l7 3.5 7-3.5v-4.5l-7 3.5z" />{" "}
      </svg>

      {/* Brand Name */}
      <div className="text-4xl font-bold text-green-800">
        Edu
        <span className="text-green-600">Go</span>
      </div>
    </div>
  );
};

export default EduGoLogo;
