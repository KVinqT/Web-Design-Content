import { useState } from "react";
import NavBar from "./NavBar";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import Footer from "./Footer";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductDetail = () => {
  const [totalProduct, setTotalProduct] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const plusProduct = () => {
    setTotalProduct(totalProduct + 1);
    setTotalPrice(totalPrice + 20);
  };

  const minusProduct = () => {
    totalProduct !== 0 && setTotalProduct(totalProduct - 1);
    totalProduct !== 0 && setTotalPrice(totalPrice - 20);
  };

  return (
    <div>
      <NavBar />
      <div className="md:pt-[130px] pt-[65px]">
        <div>
          <p className="text-xl font-mono text-center m-6">
            Details of this Hoodie
          </p>
          <div className="md:flex md:max-w-[100%] lg:max-w-[100%]">
            <div className="flex lg:w-[60%]">
              <img
                className="w-full md:w-[100%] lg:w-full lg:px-1"
                src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F46%2F86%2F468622a6344c3cbb08d06fc0d82d59c7988a91a2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
                alt=""
              />
              <img
                className="hidden lg:block lg:w-full lg:px-1"
                src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F6f%2Fea%2F6feabe6fbd0bc9b900592e2f55b92c50a346ecd6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmobilemain%5D"
                alt=""
              />
            </div>
            {/* details data */}
            <div className="bg-[#f3f3f3] md:w-[1000px] lg:w-[30%] lg:m-auto">
              <p className="p-6 text-xl font-mono font-bold md:text-center md:text-xl lg:text-3xl">
                Regular Fit Hoodie
              </p>
              <div className="flex justify-between mx-6 font-mono text-lg items-center lg:mt-11 lg:text-2xl lg:font-bold md:mt-10 lg:justify-evenly">
                <p>$ 20</p>
                <p className="bg-[#2d2727] p-2 text-white">
                  Member price: $ 15
                </p>
              </div>

              <div className="flex mt-10 justify-evenly md:mt-[100px]">
                <div
                  onClick={minusProduct}
                  className="bg-[#2d2727] rounded-full p-4 text-white hover:bg-white hover:text-[#2d2727] hover:shadow-2xl"
                >
                  <AiOutlineMinus />
                </div>
                <p className="text-3xl flex items-center">{totalProduct}</p>
                <div
                  onClick={plusProduct}
                  className="bg-[#2d2727] rounded-full p-4 text-white hover:bg-white hover:text-[#2d2727] hover:shadow-2xl"
                >
                  <AiOutlinePlus />
                </div>
              </div>

              <div className="flex justify-center mt-6 text-xl font-mono md:text-2xl lg:mt-4">
                <p>Total Price: ${totalPrice}</p>
              </div>

              <div className="m-auto w-[200px] flex justify-center mt-6 text-xl flex-row items-center font-mono border-2 border-[#2d2727] p-3 hover:bg-[#2d2727] hover:text-white duration-300 md:mt-[150px] lg:p-1 lg:mt-[100px]">
                <button className="px-2">
                  <a href="/cart">Buy</a>
                </button>
                <AiOutlineShoppingCart />
              </div>
            </div>
          </div>
          {/* description */}
          <div className="font-mono flex flex-col">
            <h1 className="text-xl font-bold text-center mt-6 md:text-3xl">
              Description
            </h1>
            <p className="p-6 md:text-2xl text-center">
              Sweatshirt with a double-layer drawstring hood, kangaroo pocket,
              and wide ribbing at cuffs and hem. Soft, brushed inside.
            </p>
            <div className="flex flex-col px-6 text-lg mt-10 md:text-2xl gap-2 lg:text-center  ">
              <p>Size - Large</p>
              <p>Fit - Regular</p>
              <p className="">
                Composition - Shell: Cotton 58%, Polyester 42% Hood lining:
                Cotton 58%, Polyester 42%
              </p>
            </div>
          </div>
          {/* image */}

          <div className="mt-[50px]">
            <div className="max-w-[100%] flex flex-wrap justify-between px-2 lg:justify-evenly">
              <img
                className="w-[48%] lg:w-[30%] "
                src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F16%2F77%2F1677910117fb8483ac06a8f80d88844e3a73fa27.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmobilemain%5D"
                alt=""
              />
              <img
                className="w-[48%] lg:w-[30%]"
                src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F0c%2F3a%2F0c3a9f6c5599fe0548dfb4f9d9847b28ac8bc4a9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmobilemain%5D"
                alt=""
              />
            </div>
            <div className="pt-2">
              <img
                className="w-[100%] md:w-[70%] m-auto lg:w-[40%]"
                src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fe8%2Fe4%2Fe8e497dbf91099a1323aaa71c8361be4ac528685.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmobilemain%5D"
                alt=""
              />
            </div>
            <div className="max-w-[100%] flex flex-wrap justify-between px-2 pt-2 lg:justify-evenly">
              <img
                className="w-[48%] lg:w-[30%]"
                src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F43%2Ff2%2F43f241442095b46caf0927330f12f82fafc56db8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmobilemain%5D"
                alt=""
              />
              <img
                className="w-[48%] lg:w-[30%]"
                src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F9f%2F43%2F9f43165404aaf96cea123cfa77ecbc37346dc666.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmobilemain%5D"
                alt=""
              />
            </div>
            <div className="pt-2">
              <img
                className="w-[100%] px-2 md:w-[70%] m-auto lg:hidden"
                src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F6f%2Fea%2F6feabe6fbd0bc9b900592e2f55b92c50a346ecd6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmobilemain%5D"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
