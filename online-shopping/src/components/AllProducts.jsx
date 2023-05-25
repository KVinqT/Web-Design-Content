import NavBar from "./NavBar";
import products from "../utils/product";
import Slider from "./Slider";
import Card from "./Card";
import productCard from "../utils/card";
import Footer from "./Footer";
import { useState } from "react";
import { useEffect } from "react";
import { HiStar } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
  const navigate = useNavigate();
  const [productChange, setProductChange] = useState(false);

  const showProduct = () => {
    setProductChange(!productChange);
  };

  const showModel = () => {
    setProductChange(!productChange);
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="md:pt-[130px] pt-[80px]">
        <p className="text-center font-mono font-bold text-2xl mt-6">
          Clothing
        </p>
        <div className="max-w-[320px] border-b border-r border-black ml-6 mt-4 cursor-pointer">
          <h1 className="text-xl font-mono p-2">Products Available On Store</h1>
        </div>
        <div className="flex px-4 py-4 cursor-pointer gap-4">
          <p
            onClick={showModel}
            className={productChange ? "border-b border-black" : "border-none"}
          >
            Product
          </p>
          <p
            onClick={showProduct}
            className={!productChange ? "border-b border-black" : ""}
          >
            Model
          </p>
        </div>
      </div>
      <div className="">
        <div className="flex flex-wrap items-center justify-evenly">
          <Card productCard={productCard[0]} change={productChange} />

          <Card productCard={productCard[1]} change={productChange} />

          <Card productCard={productCard[2]} change={productChange} />
          <Card productCard={productCard[3]} change={productChange} />

          <Card productCard={productCard[4]} change={productChange} />
        </div>
      </div>
      {/* Available on web */}
      <div>
        <div className="max-w-[320px] border-b border-r border-black ml-6 mt-10 cursor-pointer">
          <h1 className="text-xl font-mono p-2">Products Available On Web</h1>
        </div>
        <div className="mt-10">
          <div className="flex flex-wrap items-center justify-evenly ">
            <a href="/allproducts/detailproduct/:id">
              <Card productCard={productCard[6]} change={productChange} />{" "}
            </a>
            <Card productCard={productCard[7]} change={productChange} />

            <Card productCard={productCard[8]} change={productChange} />
            <Card productCard={productCard[9]} change={productChange} />

            <Card productCard={productCard[10]} change={productChange} />
            <Card productCard={productCard[11]} change={productChange} />
            <div className="mt-4">
              <Card productCard={productCard[12]} change={productChange} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllProducts;
