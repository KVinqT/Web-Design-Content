import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { ImPhone } from "react-icons/im";

const Footer = () => {
  return (
    <div>
      <div className="cursor-pointer uppercase text-white bg-[#2D2727] md:h-36 h-44 mt-16 flex justify-center items-centers">
        <div className="md:flex md:items-center text-center p-6">
          <h1 className="px-16 text-3xl font-mono font-bold pb-4">
            Sign up now & get 10% OFF
          </h1>
          <a
            href="#_"
            class="relative inline-block px-4 py-2 font-medium group"
          >
            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black duration-300"></span>
            <span class="relative text-black group-hover:text-white font-mono font-bold">
              Let's Sign Up
            </span>
          </a>
        </div>
      </div>
      {/* footer */}

      <div className="max-w-[800px] m-auto">
        <h1 className="text-3xl text-[#2D2727] md:ml-6 cursor-pointer font-mono font-bold text-center mt-5">
          Brownnie
        </h1>
        <div className="flex justify-around max-w-[100%] mt-6 cursor-pointer">
          <div className="flex flex-col w-[50%] border-r-2 border-[#2D2727]">
            <p className="py-5 font-mono font-bold text-xl m-auto">
              Here We Go
            </p>
            <ul className="m-auto text-lg font-mono text-center">
              <li className="p-1 ">Home</li>
              <li className="p-1">About Us</li>
              <li className="p-1">Contact Us</li>
              <li className="p-1">Products</li>
              <li className="p-1">Gallery</li>
            </ul>
          </div>

          <div className="flex md:flex-row flex-col w-[50%] ">
            <p className="px-10 font-mono font-bold text-xl m-auto border-r-2 border-[#2D2727]">
              Info
            </p>
            <ul className="m-auto sm:text-lg font-mono text-center text-base ">
              <li className="p-2">Delivery Policy</li>
              <li className="p-2">Privacy Policy</li>
            </ul>
          </div>
        </div>

        {/* second footer */}
        <div className="flex max-w-[200px] m-auto justify-around">
          <span className="p-3 rounded-full bg-[#f3f3f3] shadow-2xl hover:bg-[#2D2727] hover:text-white">
            <FaFacebookF />
          </span>
          <span className="p-3 rounded-full bg-[#f3f3f3] shadow-2xl hover:bg-[#2D2727] hover:text-white">
            <BsTwitter />
          </span>
          <span className="p-3 rounded-full bg-[#f3f3f3] shadow-2xl hover:bg-[#2D2727] hover:text-white">
            <AiFillInstagram />
          </span>
          <span className="p-3 rounded-full bg-[#f3f3f3] shadow-2xl hover:bg-[#2D2727] hover:text-white">
            <MdEmail />
          </span>
        </div>

        <div className="flex md:w-[400px] w-[300px] m-auto justify-around mt-4 font-mono">
          <p className="md:w-[200px] w-[150px] text-center border-r-2 border-[#2d2727]">
            Contact With Us
          </p>
          <div className="flex w-[150px] justify-between">
            <div className="pl-4">
              {" "}
              <ImPhone />
            </div>
            <div className="text-center">+959787826</div>
          </div>
        </div>

        <div className="text-center p-4 font-bold">
          @Brownnie 2023 Yangon, All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
