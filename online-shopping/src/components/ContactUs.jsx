import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { FiClock } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

const SuccessAlert = ({ onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-10">
    <div className="bg-slate-50 p-8 rounded-md shadow-lg">
      <h2 className="text-2xl font-semibold text-black  mb-4">Success!</h2>
      <p>Well received your message. Thanks for your feedback!</p>
      <button
        className="rounded-md mt-4 bg-black hover:bg-gray-800 w-full h-10 text-white"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  </div>
);

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCommentsChange = (e) => {
    setComments(e.target.value);
  };

  const handleSubmit = () => {
    if (name && email && comments) {
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Comments:", comments);

      setName("");
      setEmail("");
      setComments("");
      setShowSuccess(true);
    } else {
      alert(
        "You haven't filled in all the fields. Please fill in your data in all boxes."
      );
    }
  };

  const handleNameFocus = () => {
    if (name === "Your Name") {
      setName("");
    }
  };

  const handleEmailFocus = () => {
    if (email === "your-email@example.com") {
      setEmail("");
    }
  };

  const handleCommentsFocus = () => {
    if (comments === "Your message") {
      setComments("");
    }
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
  };

  return (
    <div>
      <NavBar />
      <div className="pt-[80px] md:pt-[130px]">
        <div className="font-mono mx-4 md:mx-auto md:max-w-[1100px] flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-5">
            <div className="mb-5 text-2xl font-semibold">Contact Us</div>
            <div className="">
              <span className="flex items-center mb-2">
                <GrLocation className="mr-2  sm:text-xl text-2xl" />
                <p>365, MinKhaung2 Street, 6 Quart, SouthOakkala Township</p>
              </span>
              <span className="flex items-center mb-2">
                <AiFillPhone className="mr-2" />
                <span> +959 250183073 </span>
              </span>
              <div className="flex items-center mb-2">
                <FiClock className="mr-2" />
                <span> 9:00 AM - 9:00 PM </span>
              </div>
              <div className="flex items-center">
                <AiOutlineMail className="mr-2" />
                <span>Brownnieshop@gmail.com</span>
              </div>
            </div>

            <div className="mt-10 text-2xl font-semibold">Office Location</div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30547.807327271672!2d96.16276081210904!3d16.852336045632608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c193106655332d%3A0x640cbec31986c524!2sSouth%20Okkalapa%20Township%2C%20Yangon!5e0!3m2!1sen!2smm!4v1684556876377!5m2!1sen!2smm"
              className="w-full h-96 mt-10 rounded-md border-2 border-black  hover:border-gray-700 "
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          <div className="w-full md:w-1/2 flex flex-col p-5 font-mono">
            <div className="mb-5 text-2xl font-semibold">Send Us A Message</div>
            <p className="text-justify ">
              We value your feedback and are eager to hear from you! If you have
              any questions, suggestions, or simply want to say hello, we
              encourage you to reach out to us. Our team at Brownnie Shop is
              dedicated to providing exceptional service and ensuring your
              satisfaction. Thank you for choosing us, and we look forward to
              connecting with you!
            </p>
            <div className="mt-5 mb-5 text-2xl font-semibold">Let Us Know</div>
            <div className="mb-3">
              <p className="mb-3">Name:</p>
              <input
                type="text"
                className="w-full p-2 border border-slate-300 hover:border-gray-500 rounded-md"
                value={name}
                onChange={handleNameChange}
                onFocus={handleNameFocus}
                placeholder="Your Name"
              />
            </div>
            <div className="mb-3">
              <p className="mb-3">Email:</p>
              <input
                type="email"
                className="w-full p-2 border border-slate-300 hover:border-gray-500 rounded-md"
                value={email}
                onChange={handleEmailChange}
                onFocus={handleEmailFocus}
                placeholder="Your-email@example.com"
              />
            </div>
            <div className="mb-3">
              <p className="mb-3">Your Comments:</p>
              <textarea
                className="w-full p-2 border border-slate-300 hover:border-gray-500 rounded-md"
                rows={4}
                value={comments}
                onChange={handleCommentsChange}
                onFocus={handleCommentsFocus}
                placeholder="Your message"
              />
            </div>
            <button
              className="rounded-md mt-3 bg-black hover:bg-gray-800 w-full h-10 text-white"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <Footer />

      {showSuccess && <SuccessAlert onClose={handleSuccessClose} />}
    </div>
  );
};

export default ContactUs;
