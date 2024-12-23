import React from "react";
import {
  CheckIcon,
  XMarkIcon,
  AdjustmentsHorizontalIcon,
  StarIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/solid";
import { PricingCardProps } from "sections";

export function PricingCard(props: PricingCardProps) {
  const { title, price, features } = props;

  // Define the icon based on the title
  const getTitleIcon = () => {
    switch (title.toLowerCase()) {
      case "standard":
        return <AdjustmentsHorizontalIcon className="h-20 w-20 text-gray-500" />;
      case "premium":
        return <StarIcon className="h-20 w-20 text-yellow-500" />;
      case "enterprise":
        return <BuildingOfficeIcon className="h-20 w-20 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="p-12 border rounded-lg shadow-2xl md:w-[500px] w-full lg:w-full">
      <div className="flex flex-col items-center p-12">
        {/* Title Icon */}
        <div className="mb-4">{getTitleIcon()}</div>
        <p className="text-lg font-bold mt-4">{title}</p>
        {/* Price */}
        <p className="text-3xl font-semibold mt-2 flex items-start">
          <span className="text-green-600 text-sm mt-1 pr-2">Rp</span> {price}
        </p>
        {/* Features List */}
        <ul className="mt-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              {feature.isActive ? (
                <CheckIcon className="h-5 w-5 text-green-500" />
              ) : (
                <XMarkIcon className="h-5 w-5 text-red-500" />
              )}
              <span>{feature.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button Below the Features List */}
      <div className="mt-6 flex justify-center">
        <button
          id={title.toLowerCase()}
          aria-label="Buy Now"
          className="p-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition w-full"
        >
          Buy {title}
        </button>
      </div>
    </div>
  );
}
