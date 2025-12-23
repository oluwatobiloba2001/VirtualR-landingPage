import React from "react";
import { features } from "../constants";

const FeaturedSection = () => {
  return (
    <section className="relative mt-20 border-b border-neutral-800 min-h-200" id="features" aria-labelledby="features-heading">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full text-sm font-medium px-2 py-1 uppercase">
          featured
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide"id="features-heading">
          Easily Build
          <span className="bg-linear-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            {" "}
            Your Code
          </span>
        </h2>
      </div>
      <ul className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <li key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-neutral-900 p-6 rounded-lg h-full flex">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500  p-5 mr-4" aria-hidden="true">
                <span className="text-white font-bold">{feature.icon}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.text}</h3>
                <p className="text-neutral-400">{feature.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FeaturedSection;
