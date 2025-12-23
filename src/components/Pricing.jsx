import React from "react";
import { pricingOptions } from "../constants";
import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  return (
    <section className="mt-20" id="pricing" aria-labelledby="pricing-heading">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider" id="pricing-heading">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((plan, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <h3 className="text-3xl mb-8">
                {plan.title}{" "}
                {plan.title === "Pro" && (
                  <span className="bg-linear-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mr-4 ml-2" aria-label="Most popular plan">
                    (Most Popular)
                  </span>
                )}
              </h3>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{plan.price}</span>
                <span className="text-neutral-300 tracking-tight">/Month</span>
                    </p>
                <ul className="mb-8">
                  {plan.features.map((feature, index) => (
                      <li key={index} className="mt-8 flex items-center">
                          <CheckCircle2 aria-hidden="true" className="text-green-400"/>
                          <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                    </ul>
                <a  href="#" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-center block transition duration-300" aria-label={`subscribe to the ${plan.title} plan`}>
                   Subscribe
                </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
