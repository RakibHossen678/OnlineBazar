const ReviewCard = ({ review }) => {
  console.log(review);
  const { name, review: reviewText, rating, img } = review;
  return (
    <div className="reviewCard">
      <div className="image">
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

export default ReviewCard;
