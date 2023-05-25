const Slider = (prop) => {
  const products = prop.products;
  return (
    <div>
      <div className="relative sm:max-w-[300px] md:max-w-[700px] lg:max-w-[1150px] m-auto mt-5">
        <div className="flex overflow-auto no-scrollbar snap-center ">
          {products.map((card) => (
            <div
              id="card"
              className="md:m-11 max-w-[300px] hover:border hover:border-[#2D2727] md:max-w-[302px] mt-10"
            >
              <div
                id="womenBg"
                style={{ backgroundImage: `url(${card.url})` }}
                className="w-[300px] md:w-[] h-[50vh] bg-center bg-cover"
              ></div>
              <div className="font-mono cursor-pointer pl-2">
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
    </div>
  );
};

export default Slider;
