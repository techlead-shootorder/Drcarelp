// components/AboutSection.js

import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Importing the check icon from react-icons

const Symptoms = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Symptoms Column */}
          <div className="w-full lg:w-1/2 bg-[#007DAB] text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Symptoms</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <FaCheckCircle className="mt-1 mr-2 text-green-400" />
                <span>
                  Pain, inflammation, and swelling of the joints
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mt-1 mr-2 text-green-400" />
                <span>
                  Limitations to movement of the joints
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mt-1 mr-2 text-green-400" />
                <span>
                  New bone growths can also occur called osteophytes around the joints causing discomfort
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mt-1 mr-2 text-green-400" />
                <span>
                  Pain and irritation in the joints after prolonged standing or movement
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mt-1 mr-2 text-green-400" />
                <span>
                  Stiffness after prolonged period of inactivity
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mt-1 mr-2 text-green-400" />
                <span>
                  Inability to move fingers, hands, or legs with freeness
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mt-1 mr-2 text-green-400" />
                <span>
                  Pain in the lower back and spine after sitting for some time
                </span>
              </li>
            </ul>
          </div>
          
          {/* Causes Column */}
          <div className="w-full lg:w-1/2 bg-[#007DAB] text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Causes</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <FaCheckCircle className="mt-1 mr-2 text-green-400" />
                <span>
                  Ageing (Most common cause and observed to be affecting majority of the patients due to this factor)
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mt-1 mr-2 text-green-400" />
                <span>
                  Repetitive and excessive usage of joints due to frequent movement and physical stress over the years
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mt-1 mr-2 text-green-400" />
                <span>
                  Obesity
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mt-1 mr-2 text-green-400" />
                <span>
                  Trauma to knees, hips, and spine observed mostly in athletes and sportsmen
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mt-1 mr-2 text-green-400" />
                <span>
                  Presence of excessive uric acid crystals
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mt-1 mr-2 text-green-400" />
                <span>
                  Abnormalities in the formation of joints
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mt-1 mr-2 text-green-400" />
                <span>
                  Diabetes and hormonal disorders
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mt-1 mr-2 text-green-400" />
                <span>
                  Accidental injuries to spine or limbs
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mt-1 mr-2 text-green-400" />
                <span>
                  Genetic predisposition or hereditary factors in some cases
                </span>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Symptoms;
