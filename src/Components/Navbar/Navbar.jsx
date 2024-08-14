import { FaCartShopping } from "react-icons/fa6";
import "./Navbar.css";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [product, setProduct] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    const cardData = JSON.parse(localStorage.getItem("cart")).length;
    setProduct(cardData);
  }, []);
  return (
    <nav>
      <div className="container">
        <div className="nav_row">
          <h1 className="logo">
            Online<span>Bazar</span>
          </h1>
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
          <div>
            <button>Login</button>
            <p className="addToCart">
              <FaCartShopping size={24} />
              <p className="count">{product}</p>
            </p>
            <p className="menubar" onClick={toggleMenu}>
              <HiMiniBars3BottomRight size={24} />
            </p>
          </div>
        </div>
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
