import { HiStar } from "react-icons/hi";
import { HiOutlineStar } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Card = (prop) => {
  const navigate = useNavigate();

  const productCard = prop.productCard;
  const product = productCard;
  const isChange = prop.change;
  const id = prop.id;

  return (
    <div>
      <div className="w-[100%] hover:border hover:border-black cursor-pointer">
        <img
          className=""
          key={id}
          src={isChange ? product.idSrc : product.src}
          alt=""
        />
        <div className="font-mono text-sm p-2">
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
        <div className="flex py-1 px-2">
          <HiStar />
          <HiStar />
          <HiStar />
          <HiStar />
          <HiOutlineStar />
        </div>
      </div>
    </div>
  );
};

export default Card;
