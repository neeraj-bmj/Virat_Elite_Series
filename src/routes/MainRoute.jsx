import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy-loaded components
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Products = lazy(() => import("../pages/Products"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Contact = lazy(() => import("../pages/Contact"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const Auth = lazy(() => import("../pages/Auth"));

const MainRoute = () => {
  return (
    <Suspense fallback={<div className="text-center text-white py-10">Loading page...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/services-page" element={<Products />} />
        <Route path="/product/service-details/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoute;
