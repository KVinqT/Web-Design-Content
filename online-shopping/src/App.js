import React from "react";
import NavBar from "./components/NavBar";
import MidContent from "./components/MidContent";
import Catrgory from "./components/Category";
import Products from "./components/Products";
import card from "./utils/data";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import MayPhyu from "./utils/MayPhyuData";
import AllProducts from "./components/AllProducts";
import products from "./utils/product";
import ProductDetails from "./components/ProductDetails";
import Register from "./components/Register";

function App() {
  return (
    <div className="">
      <Register />
      {/* <NavBar />
      <MidContent />
      <Catrgory />
      <Products card={card} title="Products ." />
      <Footer />
      <Gallery data={MayPhyu} />
      <AllProducts />
      <ProductDetails /> */}
    </div>
  );
}

export default App;
