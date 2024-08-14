import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./FeatureProduct.css";
import toast from "react-hot-toast";
const FeatureProduct = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [categoryOption, setCategoryOption] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    let sortedProducts = [...products];

    if (categoryOption && categoryOption !== "all") {
      sortedProducts = sortedProducts.filter(
        (product) => product.category.toLowerCase() === categoryOption
      );
    }

    if (sortOption === "lowToHigh") {
      sortedProducts.sort((a, b) => a.new_price - b.new_price);
    } else if (sortOption === "highToLow") {
      sortedProducts.sort((a, b) => b.new_price - a.new_price);
    }
    setFilteredProducts(sortedProducts);
  }, [sortOption, products, categoryOption]);
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategoryOption(e.target.value);
  };

  const addToCard = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updateCart = [...existingCart, product];
    localStorage.setItem("cart", JSON.stringify(updateCart));
    toast.success("Product added to cart");
  };
  return (
    <section id="feature">
      <div className="container">
        <h1 className="f_content">
          Explore Our <span>Top Picks</span>
        </h1>
        <div className="filter_control">
          <div className="dropdown">
            <label htmlFor="sort" className="label">
              Sort by Price:
            </label>
            <select id="sort" name="sort" onChange={handleSortChange}>
              <option value="" disabled selected>
                Select one
              </option>
              <option value="lowToHigh">Price low to high</option>
              <option value="highToLow">Price high to low</option>
            </select>
          </div>
          <div className="dropdown">
            <label htmlFor="category" className="label">
              Sort by Category:
            </label>
            <select id="sort" name="sort" onChange={handleCategoryChange}>
              <option value="" disabled selected>
                Select one
              </option>
              <option value="all">All</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kid">Kids</option>
            </select>
          </div>
        </div>
        <div className="feature_row">
          {filteredProducts.slice(0, 12).map((product, idx) => (
            <ProductCard
              addToCard={addToCard}
              key={idx}
              product={product}
            ></ProductCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureProduct;
