import { FaCartShopping } from "react-icons/fa6"; // Import cart icon
import "./Navbar.css"; // Import CSS for styling
import { HiMiniBars3BottomRight } from "react-icons/hi2"; // Import menu icon
import { useEffect, useState } from "react"; // Import React hooks

const Navbar = () => {
  // State to manage the menu's open/close status
  const [menuOpen, setMenuOpen] = useState(false);

  // State to store the number of products in the cart
  const [product, setProduct] = useState(0);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // useEffect to load cart data from localStorage when the component mounts
  useEffect(() => {
    const cardData = JSON.parse(localStorage.getItem("cart")).length;
    setProduct(cardData);
  }, []);

  return (
    <nav>
      <div className="container">
        <div className="nav_row">
          {/* Logo */}
          <h1 className="logo">
            Online<span>Bazar</span>
          </h1>

          {/* Navigation Links */}
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
          </ul>

          {/* Right-side controls: Login button, Cart icon, and Mobile menu icon */}
          <div>
            <button>Login</button>
            {/* Cart icon with product count */}
            <p className="addToCart">
              <FaCartShopping size={24} />
              <p className="count">{product}</p>
            </p>
            {/* Mobile menu icon */}
            <p className="menubar" onClick={toggleMenu}>
              <HiMiniBars3BottomRight size={24} />
            </p>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className="lg_menu"
          style={{ display: menuOpen ? "block" : "none" }}
        >
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
