import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage";
import Products from "./components/Products";
import AllProducts from "./components/AllProducts";
import Gallery from "./components/Gallery";
import ProductDetail from "./components/ProductDetails";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import DeliveryPolicy from "./components/DeliveryPolicy";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Cart from "./components/Cart";
import Receipt from "./components/Receipt";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },

  {
    path: "/allproducts",
    element: <AllProducts />,
  },
  {
    path: "/Gallery",
    element: <Gallery />,
  },
  {
    path: "/login",
    element: "",
  },
  {
    path: "/gallerry",
    element: <Gallery />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/delivery-policy",
    element: <DeliveryPolicy />,
  },

  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/allproducts/detailproduct/:id",
    element: <ProductDetail />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/receipt",
    element: <Receipt />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
