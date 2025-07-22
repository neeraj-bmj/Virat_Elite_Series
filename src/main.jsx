import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import WrapperProduct from "./context/WrapperProduct.jsx";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <WrapperProduct>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </WrapperProduct>
);
