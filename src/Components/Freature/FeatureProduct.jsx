import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./FeatureProduct.css";
const FeatureProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <section id="feature">
      <div className="container">
      <h1 className="f_content">Explore Our <span>Top Picks</span></h1>
        <div className="feature_row">
          
          {products.slice(0, 6).map((product, idx) => (
            <ProductCard key={idx} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureProduct;
