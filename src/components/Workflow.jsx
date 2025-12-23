import React from "react";
import { CheckCircle2 } from "lucide-react";
import code from "../assets/code.webp";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <section className="mt-20" id="workflow" aria-labelledby="workflow-heading">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide" id="workflow-heading">
        Accelerate your
        <span className="bg-linear-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          coding Workflow.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={code} alt="Code editor showing development workflow" loading="lazy" height="900" width="900" />
        </div>
        <ul className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <li key={index} className="flex mb-12">
              <div className="flex text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 aria-hidden="true" />
              </div>
              <div>
                <h3 className="mt-1 mb-2 text-xl">{item.title}</h3>
                <p className="text-neutral-300 text-md">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Workflow;
