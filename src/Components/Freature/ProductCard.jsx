import "./FeatureProduct.css";
import PropTypes from "prop-types";
import { FaCartShopping } from "react-icons/fa6";
const ProductCard = ({ product, addToCard }) => {
  const { name, category, image, description, new_price, old_price } = product;
  return (
    <section className="f_card">
      <img src={image} alt="" />
      <div>
        <h3>{name}</h3>
        <h5>{category}</h5>
        <p>{description}</p>
        <div>
          <span className="cross">${old_price}</span> <span>${new_price}</span>
        </div>
      </div>
      <button onClick={() => addToCard(product)} className="addCard">
        <FaCartShopping size={24} />
      </button>
    </section>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
  addToCard: PropTypes.func,
};

export default ProductCard;
