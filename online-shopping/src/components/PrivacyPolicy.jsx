import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import NavBar from "./NavBar";
import Footer from "./Footer";
const PrivacyPolicy = () => {
  return (
    <div className="font-mono">
      <NavBar />
      <div className="pt-[80px] md:pt-[130px]">
        <div className="max-w-[1000px] m-auto p-5">
          <h1 className="text-black-700 text-2xl font-mono font-bold flex items-center justify-center h-16">
            Privacy Policy
          </h1>

          <div className="pb-8">
            <p className="text-gray-800 text-lg font-semibold font-mono">
              What information do we collect?
            </p>
            <p className="text-gray-800 font-mono text-justify">
              We collect information that you provide to us, such as your name,
              email address, shipping and billing address, payment information,
              and purchase history. We may also collect information about your
              device and browsing behavior on our website.
            </p>
          </div>

          <div className="pb-8">
            <p className="text-gray-800 text-lg font-semibold font-mono ">
              How do we use your information?
            </p>
            <p className="text-gray-800 font-mono text-justify">
              We use your information to process and fulfill your orders, to
              communicate with you about your orders and inquiries, and to
              improve our website and services. We may also use your information
              for marketing purposes, such as sending you promotional emails or
              newsletters. You can opt-out of receiving marketing emails at any
              time by clicking the unsubscribe link in the email.
            </p>
          </div>

          <div className="pb-8">
            <p className="text-gray-800 text-lg font-semibold font-mono">
              How do we protect your information?
            </p>
            <p className="text-gray-800 font-mono text-justify">
              We implement industry-standard security measures to protect your
              personal information from unauthorized access, disclosure, or
              destruction. We use secure socket layer (SSL) technology to
              encrypt your payment information during transmission.
            </p>
          </div>

          <div className="pb-8">
            <p className="text-gray-800 text-lg font-semibold font-mono">
              Do we share your information with third parties?
            </p>
            <p className="text-gray-800 font-mono text-justify">
              We do not sell, trade, or otherwise transfer customers' personal
              information to third parties without explicit consent, except for
              the necessary data shared with our trusted partners, such as
              shipping companies, to fulfill orders. We may also disclose
              personal information if required by law or to protect our rights
              and the safety of our customers.
            </p>
          </div>

          <div className="pb-2">
            <p className="text-gray-800 text-lg font-semibold font-mono">
              How can customers access and update their personal information?
            </p>
            <p className="text-gray-800 font-mono text-justify">
              Customers can access and update their personal information by
              logging into their account on our clothing website. From there,
              they can modify their profile, manage communication preferences,
              and review or edit their order details. Alternatively, customers
              can contact our customer support team for assistance in updating
              their personal information.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
