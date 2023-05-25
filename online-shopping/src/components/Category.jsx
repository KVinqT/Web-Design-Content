const Catrgory = () => {
  return (
    <div>
      <div className="max-w-[100%] flex justify-around border-b-black">
        <div className="w-[70%] flex flex-col">
          <h1 className="md:text-2xl font-mono font-bold text-[#2D2727] md:p-6 max-w-[400px] border-r-2 border-b-2 m-6 shadow-xl shadow-[#2D2727] hover:bg-[#2D2727] hover:text-white duration-300 ease-in-out text-sm p-4 text-center">
            Categories that we support
          </h1>
          <div className="max-w-[600px] h-[400px] m-auto flex flex-col items-start overflow-auto mt-28 hover:border-2 hover:border-[#2D2727]">
            <div className="w-full flex justify-around items-center bg-[#f3f3f3] border shadow-2xl p-4 text-[#2D2727]">
              <img
                src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10221.png?imwidth=124"
                alt=""
                className="rounded-full w-16"
              />
              <div className="ml-6">
                <h1 className="font-mono font-bold sm:text-lg text-base">
                  T-shirts and Tanks
                </h1>
                <p className="font-mono sm:text-base text-xs">
                  Explore a great selection of men's T-shirts
                </p>
              </div>
            </div>
            <div className="w-full flex justify-around items-center bg-[#f3f3f3] border shadow-2xl p-4 text-[#2D2727]">
              <img
                src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10221.png?imwidth=124"
                alt=""
                className="rounded-full w-16"
              />
              <div className="ml-6">
                <h1 className="font-mono font-bold sm:text-lg text-base">
                  Short Shirt
                </h1>
                <p className="font-mono sm:text-base text-xs">
                  Explore a great selection of men's T-shirts
                </p>
              </div>
            </div>
            <div className="w-full flex justify-around items-center bg-[#f3f3f3] border shadow-2xl p-4 text-[#2D2727]">
              <img
                src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10221.png?imwidth=124"
                alt=""
                className="rounded-full w-16"
              />
              <div className="ml-6">
                <h1 className="font-mono font-bold sm:text-lg text-base">
                  Dress
                </h1>
                <p className="font-mono sm:text-base text-xs">
                  Explore a great selection of men's T-shirts
                </p>
              </div>
            </div>

            <div className="w-full flex justify-around items-center bg-[#f3f3f3] border shadow-2xl p-4 text-[#2D2727]">
              <img
                src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10221.png?imwidth=124"
                alt=""
                className="rounded-full w-16"
              />
              <div className="ml-6">
                <h1 className="font-mono font-bold sm:text-lg text-base">
                  Pants
                </h1>
                <p className="font-mono sm:text-base text-xs">
                  Explore a great selection of men's T-shirts
                </p>
              </div>
            </div>

            <div className="w-full flex justify-around items-center bg-[#f3f3f3] border shadow-2xl p-4 text-[#2D2727]">
              <img
                src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10221.png?imwidth=124"
                alt=""
                className="rounded-full w-16"
              />
              <div className="ml-6">
                <h1 className="font-mono font-bold sm:text-lg text-base">
                  T-shirts and Tanks
                </h1>
                <p className="font-mono sm:text-base text-xs">
                  Explore a great selection of men's T-shirts
                </p>
              </div>
            </div>

            <div className="w-full flex justify-around items-center bg-[#f3f3f3] border shadow-2xl p-4 text-[#2D2727]">
              <img
                src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10221.png?imwidth=124"
                alt=""
                className="rounded-full w-16"
              />
              <div className="ml-6">
                <h1 className="font-mono font-bold sm:text-lg text-base">
                  Dress
                </h1>
                <p className="font-mono sm:text-base text-xs">
                  Explore a great selection of men's T-shirts
                </p>
              </div>
            </div>

            <div className="w-full flex justify-around items-center bg-[#f3f3f3] border shadow-2xl p-4 text-[#2D2727]">
              <img
                src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10221.png?imwidth=124"
                alt=""
                className="rounded-full w-16"
              />
              <div className="ml-6">
                <h1 className="font-mono font-bold sm:text-lg text-base">
                  Long
                </h1>
                <p className="font-mono sm:text-base text-xs">
                  Explore a great selection of men's T-shirts
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* image */}
        <div
          id="nigKid"
          className=" lg:h-[100vh] w-[50%] bg-cover bg-no-repeat mt-6 bg-center"
        ></div>
      </div>
      <div className="w-[200px] bg-[#2D2727] h-1 mt-14 m-auto left-[50%]"></div>
    </div>
  );
};

export default Catrgory;
