/* eslint-disable react/prop-types */
const PricingComparator = ({ plans }) => {
  // Extract all unique features from plans
  const allFeatures = Array.from(
    new Set(
      plans.flatMap((plan) =>
        plan.features.map(
          (feature) => feature.text
        )
      )
    )
  );

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-4 text-left text-sm font-medium text-gray-600">
              Features
            </th>
            {plans.map((plan, index) => (
              <th
                key={index}
                className="p-4 text-center text-sm font-medium text-gray-600"
              >
                {plan.planName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allFeatures.map((feature, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0
                  ? "bg-white"
                  : "bg-gray-100"
              }
                    hover:${
                      index % 2 === 0
                        ? "bg-gray-100"
                        : "bg-white"
                    }
                  `}
            >
              <td className="p-4 text-[13px] font-bold text-gray-700">
                {feature}
              </td>
              {plans.map((plan, planIndex) => {
                const isAvailable =
                  plan.features.some(
                    (f) =>
                      f.text === feature &&
                      f.available
                  );
                return (
                  <td
                    key={planIndex}
                    className="p-4 text-center text-sm font-bold"
                  >
                    {isAvailable ? (
                      <svg
                        className="w-4 h-4 text-green-700 mx-auto" // Use mx-auto to center
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4 text-red-700 mx-auto" // Use mx-auto to center
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M6 6L14 14M14 6L6 14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingComparator;
