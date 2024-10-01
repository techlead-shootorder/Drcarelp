// components/FourthSection.js

import React from 'react';
import Image from 'next/image'; // Use Next.js Image component for optimized images

const FourthSection = () => {
  return (
    <section className='bg-gray-100 '>
    <div className="flex flex-col lg:flex-row items-center justify-between p-8 max-w-7xl mx-auto ">
      {/* Left Side: Image */}
      <div className="lg:w-1/2 mb-6 lg:mb-0">
        <Image
          src="/images/fourthSection.jpg" // Replace with your image path
          alt="Descriptive Alt Text"
          width={500} // Adjust width as needed
          height={400} // Adjust height as needed
          className="rounded-lg shadow-lg" // Add styles to the image
        />
      </div>

      {/* Right Side: Text */}
      <div className="lg:w-1/2 lg:pl-8">
        <h2 className="text-2xl font-bold mb-4">Your Section Title</h2>
        <p className="text-lg text-gray-700 mb-4">
          This is a unique section description. Here, you can add engaging content to capture the attention of your visitors. 
          You can discuss the features of your services, the benefits, or any other relevant information that stands out.
        </p>
        <p className="text-lg text-gray-700">
          Additional information can be provided here. This allows you to expand on the topic and give your audience a 
          comprehensive understanding of what you offer.
        </p>
      </div>
    </div>
    </section>
  );
};

export default FourthSection;
