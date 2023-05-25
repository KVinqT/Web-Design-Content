import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import NavBar from "./NavBar";
import Footer from "./Footer";
const AboutUs = () => {
  return (
    <div className="font-mono">
      <NavBar />
      <div className="pt-[80px] md:pt-[130px]">
        <div className="max-w-[1000px] mx-auto p-5">
          <div>
            <div className="text-lg font-bold mb-5">OUR ATTITUDE</div>
          </div>
          <div className=" md:text-center text-justify ">
            At Brownnie Clothing Store, we take pride in our exceptional
            attitude towards fashion and customer service. Our attitude is
            rooted in a passion for style, an unwavering commitment to quality,
            and a genuine desire to make every shopping experience memorable. We
            strive to make every visit an enjoyable and satisfying experience,
            leaving you with a sense of confidence and style. We invite you to
            experience the difference our attitude can make as you discover your
            unique fashion expression.
          </div>
        </div>
      </div>
      <div className="text-2xl font-semibold text-center mt-10">
        Why Choose Us?
      </div>
      <div className="flex justify-around p-5 mt-10 text-black">
        <div className="">
          <div className="animate-bounce flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-gray-300 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                1
              </div>
            </div>
          </div>
          <div className="">Unique and Authentic Design</div>
        </div>
        <div className="">
          <div className="animate-bounce flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-gray-300 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                2
              </div>
            </div>
          </div>
          <div className="">Superior Quality and Craftsmanship</div>
        </div>
        <div className="">
          <div className="animate-bounce flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-gray-300 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                3
              </div>
            </div>
          </div>
          <div className="">Support for Local Community</div>
        </div>
      </div>
      <div className="max-w-[1000px] mx-auto p-10">
        <div className="text-lg font-bold mb-5">OUR PURPOSE</div>
        <div className="flex flex-col-reverse md:flex-row justify-center">
          <div className="text-justify md:text-left mt-5 md:mt-0 md:w-1/2">
            Our purpose goes beyond selling clothes. We are driven by a larger
            mission to inspire confidence, empower self-expression, and foster a
            sense of community through fashion. Our purpose guides us in every
            decision we make and shapes the way we serve our customers and the
            community.
          </div>
          <div className="md:w-1/2 md:ml-20">
            <img
              src="https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/hm-magazine-2023/april_2023/2007-henrick-event/2007-Henrick-Event-top-teaser.jpg]&scale=size[1200]&sink=format[jpeg],quality[80]"
              alt="Purpose"
              className="w-full rounded-sm"
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1000px] mx-auto p-10">
        <div className="text-lg font-bold mb-5">OUR MISSION</div>
        <div className="flex flex-col md:flex-row justify-center">
          <div className="md:w-1/2 md:mr-20">
            <img
              src="https://assets.vogue.com/photos/6137ef053977960f33e69ad2/master/w_2560%2Cc_limit/00_story.jpg"
              alt="Mission"
              className="w-full rounded-sm"
            />
          </div>

          <div className="text-justify md:text-left mt-5 md:mt-0 md:w-1/2">
            Our mission is to go beyond being just a clothing retailer. We
            aspire to make a difference by providing a fashion-forward
            experience, fostering a sense of community, and promoting
            sustainability. We invite you to join us on this mission as we
            redefine what it means to shop for fashion with purpose and passion.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
