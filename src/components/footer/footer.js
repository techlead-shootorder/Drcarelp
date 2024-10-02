// components/Footer.js

import React from 'react';
import { FaWhatsapp, FaCalendarCheck } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Dr Care. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="/privacy-policy" // Replace with your actual privacy policy link
              className="hover:underline"
            >
              Privacy Policy
            </a>
            <span>|</span>
            <a
              href="/terms-and-conditions" // Replace with your actual terms and conditions link
              className="hover:underline"
            >
              Terms and Conditions
            </a>
          </div>
        </div>
      </footer>

      {/* Fixed Buttons for Mobile Screens */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2 flex justify-around items-center md:hidden">
        <a
          href="https://wa.me/1234567890" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full py-2 text-green-500 hover:bg-gray-100"
        >
          <FaWhatsapp className="h-5 w-5 mr-1" /> WhatsApp Us
        </a>
        <a
          href="/book-appointment" // Replace with your appointment link
          className="flex items-center justify-center w-full py-2 text-blue-500 hover:bg-gray-100"
        >
          <FaCalendarCheck className="h-5 w-5 mr-1" /> Book Appointment
        </a>
      </div>
    </>
  );
};

export default Footer;
