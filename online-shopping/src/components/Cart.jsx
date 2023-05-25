import Footer from "./Footer";
import NavBar from "./NavBar";
import { useState } from "react";
import Receipt from "./Receipt";

const SuccessAlert = ({ onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-10">
    <div className="bg-slate-50 p-8 rounded-md shadow-lg">
      <h2 className="text-2xl font-semibold text-black  mb-4 text-center">
        Success!
      </h2>
      <img
        className="w-[200px] m-auto  shadow-2xl"
        src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F9f%2F43%2F9f43165404aaf96cea123cfa77ecbc37346dc666.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmobilemain%5D"
        alt=""
      />
      <p className="mt-4">
        Well received your Information. Thanks for your order!
      </p>
      <button
        className="rounded-md mt-4 bg-black hover:bg-gray-800 w-full h-10 text-white"
        onClick={onClose}
      >
        OK
      </button>
    </div>
  </div>
);

const Cart = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCommentsChange = (e) => {
    setComments(e.target.value);
  };

  const handleSubmit = () => {
    if (name && email && comments) {
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Comments:", comments);

      setName("");
      setEmail("");
      setComments("");
      setShowSuccess(true);
    } else {
      alert(
        "You haven't filled in all the fields. Please fill in your data in all boxes."
      );
    }
  };

  const handleNameFocus = () => {
    if (name === "Your Name") {
      setName("");
    }
  };

  const handleEmailFocus = () => {
    if (email === "your-email@example.com") {
      setEmail("");
    }
  };

  const handleCommentsFocus = () => {
    if (comments === "Enter your Location") {
      setComments("");
    }
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
  };
  return (
    <div>
      <NavBar />
      <div className="md:pt-[130px] pt-[80px]">
        <div>
          <h1 className="text-center mt-6 font-mono text-xl ">Shopping Info</h1>
          <div
            id="allproducts"
            className="max-w-[80%] md:max-w-[35%] h-[100vh] md:h-[100vh] m-auto mt-6 border bg-[#2d2727] shadow-2xl rounded-xl"
          >
            <div className="w-full flex flex-col justify-center items-center gap-4 pt-10 ">
              <input
                className="border px-8 py-3 outline-none rounded-lg md:w-[70%]"
                type="email "
                value={name}
                onChange={handleNameChange}
                onFocus={handleNameFocus}
                placeholder="Your Name"
              />
              <input
                className="border px-8 py-3 outline-none rounded-lg md:w-[70%]"
                type="email"
                placeholder="your-email@example.com"
                value={email}
                onChange={handleEmailChange}
                onFocus={handleEmailFocus}
              />
              <input
                className="border px-8 py-3 outline-none rounded-lg md:w-[70%]"
                type="text"
                placeholder="Enter your Location"
                value={comments}
                onChange={handleCommentsChange}
                onFocus={handleCommentsFocus}
              />
            </div>
            <div className="flex justify-evenly mt-12">
              <button className="border-2 border-white w-[80px] py-2 text-white">
                <a href="/allproducts/detailproduct/:id">Cancel</a>
              </button>
              <button
                onClick={handleSubmit}
                className="border-2 border-white w-[80px] py-2 text-white"
              >
                Next
              </button>
            </div>
            <p className="text-center text-white mt-6 text-base border-b-white">
              PayMent Method
            </p>
            <div>
              <img
                className="mt-4 md:h-[20vh        ]"
                src="https://cdn.discordapp.com/attachments/1009334276023660687/1110265123110658098/og-kbzpay.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
      {showSuccess && <SuccessAlert onClose={handleSuccessClose} />}
    </div>
  );
};
export default Cart;
