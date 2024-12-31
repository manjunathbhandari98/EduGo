/* eslint-disable react/prop-types */

const PricingCard = ({
  planName,
  price,
  features,
  buttonLabel,
}) => {
  return (
    <div className="w-full h-[480px] max-w-sm p-4 bg-gray-100 border border-gray-300 rounded-lg shadow sm:p-8 flex flex-col justify-between">
      <div>
        <h5 className="mb-4 text-xl font-medium text-gray-700">
          {planName}
        </h5>
        <div className="flex items-baseline text-gray-900">
          <span className="text-3xl font-semibold">
            $
          </span>
          <span className="text-5xl font-extrabold tracking-tight">
            {price}
          </span>
          <span className="ms-1 text-xl font-normal text-gray-500">
            /month
          </span>
        </div>
        <ul
          role="list"
          className="space-y-5 my-7"
        >
          {features.map((feature, index) => (
            <li
              key={index}
              className={`flex items-center ${
                feature.available
                  ? ""
                  : "line-through decoration-gray-400"
              }`}
            >
              <svg
                className={`flex-shrink-0 w-4 h-4 ${
                  feature.available
                    ? "text-green-700"
                    : "text-gray-400"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-600 ms-3">
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default PricingCard;
