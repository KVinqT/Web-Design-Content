import NavBar from "./NavBar";
import MidContent from "./MidContent";
import Catrgory from "./Category";
import Products from "./Products";
import Footer from "./Footer";
import card from "../utils/data";

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <MidContent />
      <Catrgory />
      <Products card={card} title="Products ." />
      <Footer />
    </div>
  );
};

export default MainPage;
