// components/Navbar.js

import React from 'react';
import Image from 'next/image';
import { FaWhatsapp,FaPhoneAlt } from 'react-icons/fa'; // Import WhatsApp icon from React Icons

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/">
              {/* If you have a logo image */}
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={150}
                height={50}
                className="h-8 w-auto"
              />
              {/* If you don't have a logo image, use text */}
              {/* <span className="font-bold text-xl">Dr. Care Homeopathy</span> */}
            </a>
          </div>

          {/* Buttons Section */}
          <div className="flex items-center space-x-4">
            {/* Call Us Button */}
            <a
              href="tel:+1234567890" // Replace with your phone number
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#007DAB] hover:bg-[#007DAB]"
            >
              <FaPhoneAlt className="h-5 w-5 mr-2" />
              Call Us
            </a>

            {/* WhatsApp Us Button */}
            <a
              href="https://wa.me/1234567890" // Replace with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600"
            >
              <FaWhatsapp className="h-5 w-5 mr-2" /> {/* React Icons WhatsApp Icon */}
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
