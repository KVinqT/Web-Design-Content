import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import NavBar from "./NavBar";
import Footer from "./Footer";
const DeliveryPolicy = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-[80px] md:pt-[130px]">
        <div className="max-w-[1000px] m-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-black-700 text-2xl font-mono flex items-center font-bold justify-center h-16">
              Delivery Policy
            </h1>
          </div>
          <div className="mt-5 flex items-center justify-center">
            <ul className="list-disc ml-4 inline-block">
              <li>
                <p className="text-gray-700  font-mono pb-5">
                  For other cities - we will deliver the order tomorrow. We will
                  send you a gate voucher within a day after we receive it. When
                  the item arrives, let us know if your order was convenient or
                  not.
                </p>
              </li>
              <li>
                <p className="text-gray-700 font-mono">
                  For Yangon - We will deliver the order tomorrow. If the
                  delivery address is in Yangon, the order will arrive within
                  2-3 days. When the item arrives, we would like to know whether
                  your order was convenient.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DeliveryPolicy;
