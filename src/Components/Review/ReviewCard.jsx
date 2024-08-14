import PropTypes from "prop-types";
// ReviewCard component displays an individual review card
const ReviewCard = ({ review }) => {
  // Destructure the review object to extract properties
  const { name, review: reviewText, rating, img } = review;
  return (
    <div className="reviewCard">
      {/* Display the user's image */}
      <div className="images">
        <img src={img} alt={`${name}'s profile`} />
      </div>
      <div className="review_Content">
        {/* Display the user's name */}
        <h3>{name}</h3>
        {/* Display the review text */}
        <p className="desc">{reviewText}</p>
        {/* Display the user's rating */}
        <p className="rating">{rating}⭐</p>
      </div>
    </div>
  );
};
// PropTypes validation to ensure the correct data type is passed to the ReviewCard component
ReviewCard.propTypes = {
  review: PropTypes.object,
};

export default ReviewCard;
