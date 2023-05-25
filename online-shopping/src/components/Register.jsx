import { Navigate, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/main");
  };
  return (
    <div className="bg-[url('./images/manwithglass.jpg')] h-[100vh] bg-no-repeat bg-cover bg-center max-w-[100%]">
      <div className="">
        <div className="fixed top-[50%] left-[50%] bg-white">
          {" "}
          <button className="px-4 py-2 shadow-2xl" onClick={handleClick}>
            CLick{" "}
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

{
}
export default Register;
