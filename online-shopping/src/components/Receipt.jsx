import NavBar from "./NavBar";
import Footer from "./Footer";

const Receipt = (prop) => {
  return (
    <div>
      <NavBar />
      <div className="md:pt-[130px] pt-[80px]">
        <div className="">
          <div className="max-w-[100%] shadow-2xl mx-auto">
            <div className="flex font-mono text-xl">
              <p className="text-center">Your Order</p>
            </div>
            <img
              className="m-auto mt-8 py-4"
              src="https://lp2.hm.com/hmgoepprod?set=source[/9f/43/9f43165404aaf96cea123cfa77ecbc37346dc666.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]"
              alt=""
            />
          </div>

          <div className="bg-white text-xl mt-2">
            <div className="flex justify-around py-4">
              <h1>Product</h1>
              <h1>Hooide</h1>
            </div>
            <div className="flex justify-around">
              <h1>Customer</h1>
              <h1>kvin</h1>
            </div>
            <div className="flex justify-around py-4">
              <h1>Price</h1>
              <h1>$20</h1>
            </div>
            <div className="flex justify-around py-4">
              <h1>Qua</h1>
              <h1>2</h1>
            </div>
            <div className="flex justify-around py-4">
              <h1>Total</h1>
              <h1>$40</h1>
            </div>
          </div>
          <div className="text-center bg-black text-white">
            <button className="p-3">
              <a href="/main">Confirm</a>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Receipt;
