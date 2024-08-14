import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Footer main content */}
        <div className="footer-content">
          {/* About Us section */}
          <div className="footer-section about">
            <h1 className="logo">
              Online<span>Bazar</span>
            </h1>
            <h4>About Us</h4>
            <p>
              Our mission is to provide high-quality, stylish, and affordable
              clothing for everyone. We believe in making fashion accessible to
              all, while ensuring our products are sustainably sourced and
              ethically made.
            </p>
          </div>

          {/* Quick Links section */}
          <div className="footer-section links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Kids</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Contact Us section */}
          <div className="footer-section contact">
            <h4>Contact Us</h4>
            <p>Email: <a href="mailto:rh491464@gmail.com">rh491464@gmail.com</a></p>
            <p>Phone: <a href="tel:01933796400">01933796400</a></p>
            <p>Address: Chattogram, Bangladesh</p>
          </div>

          {/* Newsletter subscription section */}
          <div className="footer-section newsletter">
            <h4>Subscribe to Our Newsletter</h4>
            <form action="#" method="post">
              <input 
                type="email" 
                placeholder="Enter your email" 
                required 
                aria-label="Email address for newsletter subscription"
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Social media links */}
        <div className="footer-social">
          <a href="#" className="social-icon" aria-label="Facebook">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#" className="social-icon" aria-label="Twitter">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#" className="social-icon" aria-label="Instagram">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#" className="social-icon" aria-label="LinkedIn">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
