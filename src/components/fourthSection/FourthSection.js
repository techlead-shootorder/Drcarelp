// components/FourthSection.js

import React from "react";
import Image from "next/image";

const FourthSection = ({ heading, paragraph, image }) => {
  return (
    <section className="bg-gray-100">
      <div className="flex flex-col lg:flex-row items-center justify-between p-8 max-w-7xl mx-auto">
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <Image
            src={image}
            alt={heading}
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-8">
          <h2 className="text-2xl font-bold mb-4">{heading}</h2>
          <p className="text-lg text-gray-700 mb-4">{paragraph}</p>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
