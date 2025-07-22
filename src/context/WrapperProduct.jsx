import React, { createContext, useEffect, useState } from "react";
import axios from "axios";


export const ProductContext = createContext();


const WrapperProduct = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user , setUser] = useState([]);

  useEffect(()=>{
  setUser(JSON.parse(localStorage.getItem("users")) || []);
  }, []);

  

  useEffect(() => {
    axios.get("/ProductData.json")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data)
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load product data:", err);
        setLoading(false);
      });
  }, []);


  // console.log(data)
  return (
    <ProductContext.Provider value={{ products, loading }}>
      {props.children}
    </ProductContext.Provider> 
  )
}

export default WrapperProduct;












