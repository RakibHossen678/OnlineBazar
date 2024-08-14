import "./Banner.css";
import bannerImg from "../../assets/Banner.png";
import { BsArrowRight } from "react-icons/bs";
const Banner = () => {
  return (
    <header className="hero-section">
      <section className="container">
        <div className="banner_row">
           {/* Hero content including headline, subheadline, and CTA button */}
          <div className="hero-content">
            <h1 className="hero-headline">Welcome to Our Store</h1>
            <p className="hero-subheadline">
              Discover unbeatable deals on the latest products and elevate your
              shopping with exclusive offers. Explore our handpicked collection
              of top-notch gadgets and stylish fashion. Don’t miss out on
              limited-time promotions and seasonal discounts—shop now for
              exceptional value and quality!
            </p>
            <button className="hero-cta">
              Shop Now
              <span>
                <BsArrowRight />
              </span>
            </button>
          </div>

          {/* Banner image */}
          <div className="banner_img">
            <img src={bannerImg} alt="" />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Banner;
