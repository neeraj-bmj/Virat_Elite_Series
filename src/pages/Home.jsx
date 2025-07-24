import { lazy } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import TextType from'../components/TextType'
import ScrollVelocity  from '../components/ScrollVelocity';
import Magnet from'../components/Magnet';


const Home = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const submitHandler = () => {
    navigate("/products/services-page");
    toast.success("This is all products.");
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing us!");
      setEmail("");
    }
  };

  return (
    <div className="min-h-full bg-gray-600 text-white px-6 py-10 space-y-16">

      {/*this is hero section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* left side image of virat */}
        <div className="relative flex-1">
          <img
            src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/401000/401032.jpg"
            alt="my influencer imagee"
            className="w-full max-w-md mx-auto rounded-xl shadow-lg relative z-10 object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full z-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-red-700/30 to-black/80 rounded-xl"></div>
          </div>
        </div>

        {/* right side text */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="heading text-5xl md:text-7xl font-semibold tracking-tighter text-white">
           
            {/* this is react bits type text */}
            <TextType 
             text={["Power Meets Passion  -------- Endorsed by ~ Virat Kohli.","Power Meets Passion  --------- Endorsed by ~ Virat Kohli.","Power Meets Passion  --------- Endorsed by ~ Virat Kohli.","Power Meets Passion  --------- Endorsed by ~ Virat Kohli.","Power Meets Passion  --------- Endorsed by ~ Virat Kohli."]}
             typingSpeed={120}
             pauseDuration={3000}
             showCursor={true}
             cursorCharacter="   _|"
             />
          </div>

          {/* this is description */}
          <p className="description text-gray-300 mt-20 text-lg max-w-md mx-auto md:mx-0">
            Here You Can See <br />
            The Information about Your Favourite Cricketer's Brand <br /> — <span className="rounded-lg font-semibold text-rose-400 px-2 py-1 bg-gray-900">💖 Virat Elite Series 💖</span> Sports Product.
            <br />
            <br />
            Click the button to see more information...
          </p>
           
           {/* button click here go to see all products */}
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <div className="flex justify-between pr-10 flex-col md:flex-row items-end gap-4">
                  <div></div>
                  <button
                    onClick={()=>submitHandler()}
                    className="bg-rose-500 px-4 py-2 cursor-pointer rounded-md font-semibold hover:bg-rose-700 hover:scale-105 transition-all duration-300 ease-in-out"
                    >
                    ~ CLICK ME ~
                  </button>
               </div>
            </Magnet>
        </div>
      </div>

      {/* this is all social links */}
      <div className="flex flex-col items-center gap-4">

        {/* this is heading */}
        <h2 className="text-2xl md:text-5xl text-rose-400 font-bold">Follow Us on Social Media</h2>
        <div className="flex gap-6 text-2xl">

          {/* this is all links */}
            <NavLink to="https://github.com/neeraj-bmj" className="hover:text-blue-500">
              <i className="fab fa-github"></i>
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/neerajguptaica" className="hover:text-blue-500">
              <i className="fab fa-linkedin"></i>
            </NavLink>
            <NavLink to="https://x.com/coder_neeraj?s=09" className="hover:text-sky-400">
              <i className="fab fa-twitter"></i>
            </NavLink>
            <NavLink to="#" className="hover:text-blue-500">
              <i className="fab fa-facebook"></i>
            </NavLink>
            <NavLink to="#" className="hover:text-red-500">
              <i className="fab fa-youtube"></i>
            </NavLink>
            <NavLink to="#" className="hover:text-pink-400">
              <i className="fab fa-instagram"></i>
            </NavLink>
          
        </div>
      </div>


      {/* this is scrolling animation */}
      <ScrollVelocity
        texts={['Virat Elite Series', 'Virat Elite Series']} 
        velocity={80} 
        className="custom-scroll-text text-4xl md:text-6xl  text-rose-400 cursor-wait"
      />



      {/* this is newsletter part */}
      <div className="max-w-2xl mx-auto text-center bg-gray-700 p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-300 mb-6">
          Get the latest updates on products, events, and exclusive offers <br /> from the <span className="rounded-lg font-semibold text-rose-400 px-2 py-1 bg-gray-900">💖 Virat Elite Series 💖</span> .
        </p>
        <form
          onSubmit={handleNewsletter}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          {/* here write email */}
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full sm:w-2/3 border-b outline-0 px-4 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* this is button */}
          <Magnet padding={50} disabled={false} magnetStrength={5}>
            <button type="submit" 
              className="bg-rose-600 cursor-pointer hover:bg-rose-700 text-white px-4 py-2 rounded-md transition-all hover:scale-105 duration-300 ease-in-out">
              Subscribe
            </button>
          </Magnet>
        </form>
      </div>
    </div>
  );
};

export default Home;
