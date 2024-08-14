import { useEffect, useState } from "react";
import "./Review.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "./ReviewCard";

// The Review component fetches and displays customer reviews in a responsive slider
const Review = () => {
  // State to hold the reviews data
  const [reviews, setReviews] = useState([]);

  // Fetch the reviews from a local JSON file when the component mounts
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  // Slider settings for the Slick carousel
  let settings = {
    dots: true, // Show navigation dots
    infinite: false, // Disable infinite scrolling
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 2, // Number of slides to scroll at a time
    initialSlide: 0, // Initial slide index
    responsive: [
      {
        breakpoint: 1024, // Settings for screen widths less than 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // Settings for screen widths less than 600px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480, // Settings for screen widths less than 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <section className="review">
      <div className="container">
        {/* SEO tag: H2 heading for accessibility and SEO */}
        <h2 className="heading">
          Valuable feedback from <br /> <span>our client</span>
        </h2>
        <div className="row">
          {/* Slider component to display reviews in a carousel */}
          <Slider {...settings}>
            {reviews.map((review, idx) => (
              <ReviewCard key={idx} review={review} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Review;
