import { ProductContext } from "../context/WrapperProduct";
import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { products, loading } = useContext(ProductContext);
  const params = useParams();
  const navigate = useNavigate();

  const product = products.find((product) => params.id == product.id);
  console.log(product);

  return (
    <div className="min-h-auto bg-gray-600 p-6 md:p-12">
      <div className="max-w-6xl mx-auto bg-gray-500 shadow-xl rounded-lg overflow-hidden  hover:scale-105 transition-all duration-300 ease-in-out">
        {/* This is Product Image and Information */}
        <div className="grid md:grid-cols-2 gap-2 md:gap-8 p-6">
          {/*This is Product Image */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[300px] md:h-[400px] object-cover rounded-md"
            />
          </div>

          {/* this is all about Product information */}
          <div className="flex flex-col justify-between gap-3">
            {/* this is product name */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100">{product.name}</h2>

            {/* this is product category */}
            <p className=" text-lg font-light text-rose-800 uppercase tracking-wide">
              Category:{" "}
              <span className="font-semibold text-green-600 md:text-white">{product.category}</span>
            </p>

            {/* this is product description */}
            <p className="text-md md:text-lg text-zinc-100">{product.description}</p>

            {/* this is product price */}
            <div className="text-xl font-semibold text-pink-800">
              Price: {product.price}
            </div>

            {/* this is product brand */}
            <p className="text-sm text-gray-500">Brand: {product.brand}</p>

            {/* this is button  */}
            <div className="md:mt-6">
              <button
                onClick={() => navigate(-1)}
                className="px-6 py-2 cursor-pointer bg-indigo-600 text-white rounded-lg hover:bg-indigo-800 hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>

        {/* This is product id  */}
        <div className="px-6 py-4 border-t text-sm text-pink-800">
          Product ID: {product.id}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
