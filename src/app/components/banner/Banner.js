// components/Banner.js

import React, { useState } from "react";
import { toast } from "react-hot-toast";

const Banner = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // State to manage form errors
  const [errors, setErrors] = useState({});

  // State to manage submission status
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handler to update form data
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Remove error message upon input change
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Form validation function
  const validateForm = () => {
    const newErrors = {};
    const phoneRegex = /^[0-9]{10}$/; // Adjust regex as per your requirements

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors before submitting.");
      return;
    }

    // If validation passes, proceed to submit the form
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.status === 200) {
        toast.success(data.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/banner.jpg')" }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl">
          {/* Text Section */}
          <div className="w-full lg:w-3/4 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Welcome to Dr. Care Homeopathy
            </h1>
            <p className="text-lg sm:text-xl text-gray-200">
              Providing comprehensive homeopathic treatments tailored to your
              needs.
            </p>
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-1/4 bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
              Make An Appointment
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-4 py-2 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="Your Name"
                  required
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-4 py-2 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="you@example.com"
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-4 py-2 border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="Your 10-digit Phone Number"
                  required
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Message Field */}

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className={`w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-white bg-[#007DAB] hover:bg-[#007DAB] rounded-md shadow-sm text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
