import { lazy, Suspense } from "react";
const Footer = lazy(() => import("./components/Footer"));
import Navbar from "./components/Navbar";
import MainRoute from "./routes/MainRoute";
import SplashCursor from './components/SplashCursor.jsx';
import Loader from "./components/Loader.jsx";


const App = () => { 
  // const sampleProduct = {
  //   name: "Cricket Bat - Pro Edition",
  //   category: "Sports Equipment",
  //   image:
  //     "https://images.unsplash.com/photo-1751692911847-96d282244940?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D",
  //   description:
  //     "High-quality Kashmir willow bat for professional players. Lightweight and balanced for maximum performance.",
  //   price: 3999,
  //   brand: "SS Ton",
  // };

  return (
    <div>
      <Suspense fallback={<Loader/>}>
        <Navbar />
        <MainRoute />
        <Footer />
        <SplashCursor />
      </Suspense>
    </div>
  );
};

export default App;
