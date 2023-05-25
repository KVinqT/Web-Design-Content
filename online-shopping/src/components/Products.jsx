import { BsSearch } from "react-icons/bs";
import { TextField } from "@mui/material";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Products = (prop) => {
  const cards = prop.card;
  console.log(cards);
  const title = prop.title;
  return (
    <div className="flex flex-col">
      <div className=" flex gap-3  flex-colitems-center font-mono font-bold text-2xl md:mt-20 mt-10 ml-16">
        <span className="">
          <TbPlayerTrackNextFilled />
        </span>
        <h1 className="cursor-pointer">{title}</h1>
      </div>
      <div className="relative sm:max-w-[400px] md:max-w-[780px] lg:max-w-[1150px] m-auto mt-5">
        <div className="md:flex sm:overflow-auto sm:no-scrollbar sm:snap-center ">
          {cards.map((card) => (
            <div
              id="card"
              className="md:m-11 max-w-[300px] hover:border hover:border-[#2D2727] md:max-w-[300px] mt-10"
            >
              <div
                id="womenBg"
                style={{ backgroundImage: `url(${card.url})` }}
                className="md:w-[295px] h-[50vh] bg-center bg-cover w-[295px]"
              ></div>
              <div className="font-mono cursor-pointer pl-2 border-b border-b[#2D2727] md:border-b-0">
                <div className="w-10 hover:shadow-2xl font-semibold animate-bounce">
                  {card.price}
                </div>
                <p className="font-bold">{card.tee}</p>
                <p>{card.description}</p>
                <p className="text-red-700 animate-pulse">{card.newOrNot}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="w-[300px] bg-black text-white m-auto p-4 font-mono font-bold text-lg hover:bg-white hover:border-2 hover:border-black hover:text-black md:mt-8 mt-11 duration-300 ease-linear">
        <a href="/allproducts"> Load more products</a>
      </button>
    </div>
  );
};

export default Products;
