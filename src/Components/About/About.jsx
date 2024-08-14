import "./About.css";
import aboutImg from '../../assets/about.jpg'
const About = () => {
  return (
    <div>
      <section className="about-us">
        <div className="container">
          <h2>About <span className="us">Us</span></h2>
          <div className="about_row">
            <div>
              <p className="mission">
                Our mission is to provide high-quality, stylish, and affordable
                clothing for everyone. We believe in making fashion accessible
                to all, while ensuring our products are sustainably sourced and
                ethically made.
              </p>
              <p className="values">
                <strong>Our Values:</strong>
              </p>
              <ul className="values-list">
                <li>
                  <strong>Quality:</strong> We are committed to offering only
                  the best products that stand the test of time.
                </li>
                <li>
                  <strong>Sustainability:</strong> We prioritize eco-friendly
                  practices in every aspect of our business.
                </li>
                <li>
                  <strong>Inclusivity:</strong> Fashion is for everyone, and we
                  celebrate diversity in all its forms.
                </li>
                <li>
                  <strong>Customer Satisfaction:</strong> Your happiness is our
                  top priority, and we strive to exceed your expectations.
                </li>
              </ul>
            </div>
            <div className="image">
              <img src={aboutImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
