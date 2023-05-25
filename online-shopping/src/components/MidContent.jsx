import React from "react";
import Typed from "react-typed";
import { GrLinkNext } from "react-icons/gr";
import { useState } from "react";

const MidContent = () => {
  return (
    <div className="md:pt-[130px]">
      <div
        id="bgGround"
        className="bg-[url('./images/background.jpg')] h-[100vh] bg-no-repeat bg-cover bg-center max-w-[100%]"
      >
        <div className="md:w-[400px] w-[350px] pt-56 md:float-right md:pr-6 m-auto ">
          <div className="flex flex-col items-center justify-center bg-white p-10 md:opacity-60 shadow-2xl ">
            <div className="flex flex-col items-center opacity-100">
              <h1 className="font-mono font-bold text-xl">It suits you</h1>
              <h1 className="p-2 font-mono text-base">
                Stay sharp this spring no matter the occasion.
              </h1>
              <Typed
                className="md:text-xl sm:text-lg text-sm font-mono"
                strings={["Shopping Now..."]}
                typeSpeed={130}
                backSpeed={150}
                loop
              />
            </div>
          </div>
          <button className="px-4 py-3 font-mono shadow-2xl bg-[#2D2727] text-white md:animate-bounce flex items-center justify-center hover:bg-white hover:shadow-2xl hover:text-[#2D2727] duration-300">
            <a href="/allproducts">Go</a>
            <div className="px-2 text-white">
              <GrLinkNext className="" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MidContent;
