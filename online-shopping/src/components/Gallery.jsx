import { AiOutlineDown } from "react-icons/ai";
import NavBar from "./NavBar";
import Footer from "./Footer";
import MayPhyu from "../utils/MayPhyuData";

const Gallery = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-[80px] md:pt-[130px]">
        <div className="max-w-[100%] flex border-b-2 bordedr-[#f3f3f3] md:flex md:flex-row  md:items-center">
          <div className="w-full">
            <h1 className="text-sm mr-2 font-mono flex justify-center items-center font-bold sm:text-lg sm:mt-5 mt-1 md:text-2xl lg:mb-10">
              Welcome To the Gallery of Brownnie's
            </h1>
            <p className="text-xs lg:leading-8 leading-6 font-mono p-2 sm:text-lg text-justify lg:text-lg lg:w-[700px] lg:text-center lg:m-auto">
              Step into our gallery and immerse yourself in the captivating
              allure of our local clothing. Our models embody the essence of
              tradition and style, showcasing the vibrant colors and intricate
              designs that define our cultural heritage. From flowing saris to
              meticulously crafted kimonos, each garment is a testament to the
              artistry and creativity of our talented designers. Experience the
              fusion of modernity and tradition as our models bring these
              captivating pieces to life. Join us on this visual journey
              celebrating the timeless elegance of our local clothing.
            </p>
            <p className="font-mono font-bold sm:text-2xl sm:font-mono sm:font-bold text-center sm:mt-8 ">
              Brownnie
            </p>
            <div className="bg-gray-300 rounded-full p-2 w-8 m-auto mt-6 animate-bounce sm:mt-14 sm:p-4 sm:w-12">
              <AiOutlineDown />
            </div>
          </div>
        </div>
      </div>

      {/* belowImages */}

      <div>
        <div className="max-w-[330px] mt-5 m-auto border-b border-black pb-3 md:m-8 lg:text-xl">
          <p>Collections of clothes</p>
        </div>

        <div className="mt-4">
          <p className="font-bold font-mono text-xl text-center cursor-pointer lg:text-3xl">
            Model <span className="text-[#2d2727]">Thet Thet Thin|Beauty </span>
            with our clothes
          </p>
          <div className="text-base font-mono m-8 lg:text-xl lg:text-center">
            <p> Name: Thet Thet Thin</p>
            <p> Email: beauty@gmail.com</p>
            <p>Contact : +959785561815</p>
          </div>
        </div>
      </div>
      {/* image */}
      <div className="lg:flex">
        {MayPhyu.map((data) => (
          <div className="max-w-[299px] max-h-[600px] m-auto shadow-2xl border md:hover:scale-105 overflow-hidden mt-6 duration-300 ease-in-out border-black md:border-none">
            <img className="h-[400px] w-full" src={data.url} alt="" />
            <div className="text-base font-mono m-2">
              <p>
                Fabric - <b>{data.Fabric}</b>{" "}
              </p>
              <p>
                Outfit Type - <b>{data.OutfitType}</b>
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* img amyr g */}
      <div className="mt-8">
        <div className="max-w-[100%] m-2 flex lg:h-[450px]">
          <img
            id="bgChange1"
            className="w-[50%] object-center lg:object-bottom object-cover lg:p-8 p-2"
            src="https://cdn.discordapp.com/attachments/1009334276023660687/1110094281840009226/IMG_1839.jpg"
            alt=""
          />
          <img
            className="w-[50%] object-center lg:object-bottom object-cover h-38 lg:p-8 p-2"
            src="https://cdn.discordapp.com/attachments/1009334276023660687/1110095085141495889/IMG_1838.jpg"
            alt=""
          />
        </div>
        <div className="max-w-[100%]">
          <img
            className="w-[98%] m-auto h-[350px] object-cover object-center md:object-cover md:object-center lg:h-[600px] lg:object-cover lg:object-center"
            src="https://cdn.discordapp.com/attachments/1009334276023660687/1110040468160524389/IMG_1837.jpg"
            alt=""
          />
        </div>

        <div className="flex max-w-[100%] m-4 md:justify-between">
          <img
            className="w-[50%] object-cover object-center h-[350px]"
            src="https://cdn.discordapp.com/attachments/1009334276023660687/1110040474078687393/IMG_1836.jpg"
            alt=""
          />
          <img
            className="w-[50%] h-[350px] object-center object-cover ml-2"
            src="https://media.discordapp.net/attachments/1009334276023660687/1110042355677016084/IMG_1840.jpg?width=828&height=662"
            alt=""
          />
        </div>
        <div className="max-w-[100%]">
          <img
            className="w-[95%] m-auto h-80 object-center object-cover md:w-[50%] md:object-cover sm:object-top md:h-[500px]"
            src="https://cdn.discordapp.com/attachments/1009334276023660687/1110050280365637743/IMG_1849.png"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Gallery;
