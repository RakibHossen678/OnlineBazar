import "./FeatureProduct.css";
import { FaCartShopping } from "react-icons/fa6";
const ProductCard = ({ product }) => {
  const { name, category, image, description, new_price, old_price } = product;
  return (
    <div className="f_card">
      <img src={image} alt="" />
      <div>
        <h3>{name}</h3>
        <h5>{category}</h5>
        <p>{description}</p>
        <div>
          <span className="cross">${old_price}</span> <span>${new_price}</span>
        </div>
      </div>
      <div className="addCard">
        <FaCartShopping size={24} />
      </div>
    </div>
  );
};

export default ProductCard;
