// pages/terms-and-conditions.js

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/footer';

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-lg text-gray-700">
              These Terms and Conditions govern your use of Dr. Care&apos;s website located at drcare.com. By accessing this website, you accept these Terms and Conditions in full. Do not continue to use Dr. Care&apos;s website if you do not accept all of the Terms and Conditions stated on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property Rights</h2>
            <p className="text-lg text-gray-700">
              Unless otherwise stated, Dr. Care and/or its licensors own the intellectual property rights for all material on Dr. Care. All intellectual property rights are reserved. You may access this from Dr. Care for your own personal use subjected to restrictions set in these Terms and Conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
            <p className="text-lg text-gray-700">
              When using our website, you agree to comply with all applicable laws and regulations. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Termination</h2>
            <p className="text-lg text-gray-700">
              We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-lg text-gray-700">
              In no event shall Dr. Care, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="text-lg text-gray-700">
              These Terms shall be governed and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to These Terms</h2>
            <p className="text-lg text-gray-700">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-lg text-gray-700">
              If you have any questions about these Terms, please contact us at:
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

export default TermsAndConditions;
