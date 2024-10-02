// pages/privacy-policy.js

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-lg text-gray-700">
              Welcome to Dr. Care. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-lg text-gray-700 mb-4">
              We may collect personal identification information from Users in various ways, including but not limited to when Users visit our site, register on the site, subscribe to the newsletter, and in connection with other activities.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li>Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Medical History</li>
              <li>Payment Information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Collected Information</h2>
            <p className="text-lg text-gray-700">
              Dr. Care may use the collected information for various purposes, including:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li>To provide and maintain our services</li>
              <li>To personalize user experience</li>
              <li>To process transactions</li>
              <li>To send periodic emails</li>
              <li>To improve our website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Protection of Your Information</h2>
            <p className="text-lg text-gray-700">
              We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Disclosure</h2>
            <p className="text-lg text-gray-700">
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except trusted third parties who assist us in operating our website or conducting our business, provided they agree to keep this information confidential.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Consent</h2>
            <p className="text-lg text-gray-700">
              By using our site, you consent to our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-lg text-gray-700">
              Dr. Care has the discretion to update this Privacy Policy at any time. We encourage Users to frequently check this page for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-lg text-gray-700">
              If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
            </p>
            <p className="text-lg text-gray-700">
              <strong>Email:</strong> support@drcare.com
            </p>
            <p className="text-lg text-gray-700">
              <strong>Phone:</strong> +1 (234) 567-890
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
