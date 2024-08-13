import { useEffect, useState } from "react";

const FeatureProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products)
  return (
    <section id="feature">
      {/* <section className="p-8 bg-gray-100">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500 text-sm">{product.description}</p>
                <div className="flex justify-between mt-2">
                  <span className="text-xl font-bold">
                    ${product.new_price.toFixed(2)}
                  </span>
                  <span className="text-gray-500 line-through">
                    ${product.old_price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </section>
  );
};

export default FeatureProduct;
