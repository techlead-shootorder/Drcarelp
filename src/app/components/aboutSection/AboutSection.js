// components/AboutSection.js

import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center">
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <h2 className="text-3xl font-bold mb-4">About Dr. Care Homeopathy</h2>
          <p className="text-lg text-gray-700 mb-4">
            At Dr. Care Homeopathy, we are dedicated to providing holistic and effective homeopathic treatments tailored to your individual needs. Our experienced practitioners employ natural remedies to help you achieve optimal health and well-being.
          </p>
          <p className="text-lg text-gray-700">
            Our mission is to empower our patients with personalized care, ensuring a comfortable and supportive environment for your healing journey.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative h-64 sm:h-80 md:h-96 lg:h-auto">
          <Image
            src="/images/about.jpg" // Ensure this image exists in public/images/
            alt="About Dr. Care Homeopathy"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
