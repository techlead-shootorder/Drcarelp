// components/Symptoms/Symptoms.js

import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Importing the check icon from react-icons

const Symptoms = ({ sections }) => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {sections.map((section) => (
            <div key={section.title} className="w-full lg:w-1/2 bg-[#007DAB] text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <ul className="space-y-2">
                {section.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheckCircle className="mt-1 mr-2 text-green-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Symptoms;
