import { CgProfile } from "react-icons/cg";
import { AiOutlineShopping } from "react-icons/ai";
import { RiMenu2Line } from "react-icons/ri";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { BiSearchAlt } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { ImCross } from "react-icons/im";

const NavBar = () => {
  const [nav, setNav] = useState(true);
  const [Login, setLogin] = useState(true);

  const handleLogin = () => {
    setLogin(!Login);
  };

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className="">
      <div className="fixed w-[100%] h-16 md:border-b-2 shadow-xl md:shadow flex items-center justify-between text-xl font-mono font-bold bg-white z-20">
        <div className="text-2xl ml-6 text-[#2D2727] md:hidden cursor-pointer">
          <RiMenu2Line onClick={handleClick} />
        </div>
        <h1 className="text-2xl text-[#2D2727] md:ml-6 cursor-pointer">
          <a href="/main">Brownnie</a>
        </h1>
        <div className="flex gap-4 mr-8 text-2xl text-[#2D2727] md:mr-6 cursor-pointer">
          <CgProfile onClick={handleLogin} />
          <AiOutlineShopping />
        </div>

        {/* login */}
        <div
          id="bgBlack"
          className={
            !Login
              ? "h-[100vh] fixed top-0 w-[100%] ease-in-out z-10 bg-black opacity-60"
              : "hidden"
          }
        ></div>
        <div
          className={
            !Login
              ? "absolute sm:top-[80%] md:top-[80%] top-[10%] lg:left-[30%] md:left-[26%] sm:left-[20%] left-[0] opacity-100 z-40 lg:w-[550px] md:w-[540px] sm:w-[530px] w-[415px] h-[620px] bg-white"
              : "hidden"
          }
        >
          <div className="float-left m-2 md:float-right rounded-full p-2 bg-black text-white">
            <ImCross onClick={handleLogin} />
          </div>
          <div className="m-14">
            <h1 className="text-2xl font-bold uppercase">Sign In</h1>
            <p className="text-sm text-gray-500">
              Signing In and becoming a member of us
            </p>
          </div>
          <div className="max-w-full">
            <p className="sm:ml-16 sm:text-sm text-xs p-2 w-[50px] ml-[38px]">
              Email
            </p>
          </div>
          <div className="max-w-full">
            <input
              type="email"
              placeholder="Enter an email"
              className="sm:w-[400px] border-black border ml-[38px] sm:ml-[70px] p-4 focus:outline-none text-sm w-[300px] m-auto"
            />
          </div>
          <div className="max-w-full">
            <p className="sm:ml-16 sm:text-sm text-xs p-2 w-[50px] ml-[38px]">
              Password
            </p>
          </div>
          <div className="max-w-full">
            <input
              type="password"
              placeholder="Enter an email"
              className="sm:w-[400px] border-black border ml-[38px] sm:ml-[70px] p-4 focus:outline-none text-sm w-[300px] m-auto"
            />
          </div>
          <div className="text-sm flex justify-between sm:max-w-[400px] max-w-[300px] m-auto pt-3 cursor-pointer">
            <div className="flex ml-[-10px]">
              <p className="mr-2">Remember Me</p>
              <input type="radio" />
            </div>
            <p className="mr-4">Forget password</p>
          </div>
          <div className="sm:w-[400px] w-[300px] bg-black border sm:ml-[70px] ml-[40px] p-4 text-sm text-white mt-6 cursor-pointer">
            <p className="text-center tracking-wide">
              {" "}
              <a href="/main">Sign In</a>
            </p>
          </div>
          <div className="sm:w-[400px] w-[300px] bg-white border border-black sm:ml-[70px] ml-[40px] p-4 text-sm text-black mt-6 cursor-pointer">
            <p className="text-center tracking-wide"> Become a member</p>
          </div>
        </div>

        {/* mobile Nav */}
        <div
          className={
            !nav
              ? "w-full h-[100vh] bg-white fixed top-0 sm:w-[60%] shadow-2xl ease-out duration-500 md:hidden"
              : "fixed left-[100%] "
          }
        >
          <div className="mx-10 w-[40px] p-2 relative top-[3%] text-2xl  rounded-full bg-slate-100">
            <RxCross1 onClick={handleClick} />
          </div>

          <ul className="transition flex cursor-pointer flex-col justify-start pt-6 max-w-[400px] mx-auto md:max-w-full md:mx-6 text-[#2D2727] ">
            <li className="transition text-xl uppercase p-3 mt-4 hover:bg-[#939292] hover:translate-x-1 duration-500">
              <a href="/main">Home</a>
            </li>
            <li className="text-xl uppercase p-3 hover:bg-[#939292] hover:translate-x-1 duration-500">
              <a href="/allproducts" className="">
                Products
              </a>
              <span className="bg-gray-600 rounded-md p-1 text-white text-xs mx-2">
                categories
              </span>
            </li>
            <li className="text-xl uppercase p-3 hover:bg-[#939292] hover:translate-x-1 duration-500">
              <a href="/about-us">About Us</a>
            </li>
            <li className="text-xl uppercase p-3 hover:bg-[#939292] hover:translate-x-1 duration-500 ">
              <a href="/contact-us">Contact Us</a>
            </li>
            <li className="text-xl uppercase p-3 hover:bg-[#939292] hover:translate-x-1 duration-500">
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>

          <div className="flex justify-between max-w-[400px] m-auto p-3 border-t py-6 md:hidden text-[#2D2727] hover:bg-[#939292] hover:translate-x-1 duration-500 cursor-pointer">
            <p className="text-xl uppercase ">
              <a href="">Login</a>
            </p>
            <CgProfile className="text-3xl" />
          </div>
          <div className="flex justify-between max-w-[400px] m-auto p-3 border-t py-6 md:hidden text-[#2D2727] hover:bg-[#939292] hover:translate-x-1 duration-500 cursor-pointer">
            <span className="text-xl uppercase">
              <a href="/gallery">Gallery</a>
            </span>
          </div>
          <div className="justify-center max-w-[400px] m-auto p-3 md:my-6 text-[#2D2727] gap-4 flex">
            <BsFacebook className="text-2xl cursor-pointer" />
            <BsTwitter className="text-2xl cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="md:fixed top-16 hidden text-md md:flex justify-center font-mono gap-7 h-16 items-center shadow-lg lg:text-lg  md:w-full z-10 bg-[#f3f3f3]">
        <p className="cursor-pointer hover:border-b-[#2D2727] hover:border-b-2 transition ease-in-out duration-300">
          <a href="/main">Home</a>
        </p>
        <p className="cursor-pointer hover:border-b-[#2D2727] hover:border-b-2 transition ease-in-out duration-300">
          <a href="/about-us">About Us</a>
        </p>
        <p className="cursor-pointer hover:border-b-[#2D2727] hover:border-b-2 transition ease-in-out duration-300">
          <a href="/contact-us"> Contact Us</a>
        </p>
        <p className="cursor-pointer  hover:border-b-[#2D2727] hover:border-b-2 transition ease-in-out duration-300">
          <a href="/delivery-policy">Delivery Policy</a>
        </p>
        <p className="cursor-pointer  hover:border-b-[#2D2727] hover:border-b-2 transition ease-in-out duration-300">
          <a href="/privacy-policy"> Privacy Policy</a>
        </p>
        <p className="cursor-pointer hover:border-b-[#2D2727] hover:border-b-2 transition ease-in-out duration-300">
          <a href="/allproducts"> Products</a>
        </p>
        <p className="cursor-pointer hover:border-b-[#2D2727] hover:border-b-2 transition ease-in-out duration-300">
          <a href="/gallery"> Gallery</a>
        </p>
      </div>
    </div>
  );
};

export default NavBar;
