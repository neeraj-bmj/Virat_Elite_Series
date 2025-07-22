import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/WrapperProduct";
import ProductCard from "../components/ProductCard.jsx";
import FilterProduct from "../components/ProductFilter";
import { nanoid } from "nanoid";

const Products = () => {
  const { products, loading } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleFilter = (category, search) => {
    let filtered = products;

    if (category !== "All") {
      filtered = filtered.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (search.trim() !== "") {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  if (loading) return <p className="text-center">Loading products...</p>;

  return (
    <div className="p-4 bg-gray-600 min-h-screen">


      {/* Filter UI */}
      <FilterProduct onFilter={handleFilter} />

      {/* this is all product cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id = nanoid()}
              className="border hover:border-red-500 rounded-2xl flex justify-center items-center hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out p-3 bg-white"
            >
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <p className="text-white text-center col-span-full">
            No products found.
          </p>
        )}
      </div>


    </div>
  );
};

export default Products;
