import PropTypes from "prop-types";
const ReviewCard = ({ review }) => {
  const { name, review: reviewText, rating, img } = review;
  return (
    <div className="reviewCard">
      <div className="images">
        <img src={img} alt="" />
      </div>
      <div className="review_Content">
        <h3>{name}</h3>
        <p className="desc">{reviewText}</p>
        <p className="rating">{rating}⭐</p>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.object,
};

export default ReviewCard;
