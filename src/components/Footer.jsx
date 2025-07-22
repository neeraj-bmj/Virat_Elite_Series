import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-gray-300 py-3">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-2">

        {/* this is logo and about */}
        <div>
          <div className="logo w-10 h-10 rounded-full overflow-hidden">
            <img src="https://media.gettyimages.com/id/2159844999/photo/bridgetown-barbados-virat-kohli-of-india-celebrates-with-the-icc-mens-t20-cricket-world-cup.jpg?s=612x612&w=0&k=20&c=zo9u08kvFAyce7uL3m1GMrbL7rrVwY9mDV0_FZcmwUM="
            alt="" 
            className="w-full h-full object-cover"/>
          </div>
          <p className="text-sm">
            A sports platform where fitness meets passion. Join our team and elevate your journey.
          </p>
        </div>

        {/* this is quick links */}
        <div>
          <h3 className="QuickLinks text-white text-lg font-semibold">Quick Links</h3>
          <ul className="text-sm">
            <li><NavLink to="/" className="hover:text-red-500 transition">Home</NavLink></li>
            <li><NavLink to="#" className="hover:text-red-500 transition">Team</NavLink></li>
            <li><NavLink to="#" className="hover:text-red-500 transition">FAQ</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-red-500 transition">Contact</NavLink></li>
          </ul>
        </div>

        {/*this is contact info */}
        <div>
          <h3 className="text-white text-lg font-semibold ">Contact</h3>
          <p className="text-sm ">Email: contact@sportszone.com</p>
          <p className="text-sm ">Phone: +91 80815 999XX</p>
          <p className="text-sm ">Location: Gorakhpur, U.P, India</p>
          <p className="text-sm ">Software developer: @Neeraj Gupta </p>
        </div>

        {/* this is social icons */}
        <div>
          <h3 className="text-white text-lg font-semibold">Follow Us</h3>
          <div className="flex gap-3 text-sm">
            <NavLink to="https://x.com/coder_neeraj?s=09" className="hover:text-red-500 transition">
              <i className="fab fa-twitter"></i>
            </NavLink>
            <NavLink to="https://github.com/neeraj-bmj" className="hover:text-red-500 transition">
              <i className="fab fa-github"></i>
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/neerajguptaica" className="hover:text-red-500 transition">
              <i className="fab fa-linkedin"></i>
            </NavLink>
            <NavLink to="#" className="hover:text-blue-500 transition">
              <i className="fab fa-facebook-f"></i>
            </NavLink>
            <NavLink to="#" className="hover:text-red-500 transition">
              <i className="fab fa-instagram"></i>
            </NavLink>
            <NavLink to="#" className="hover:text-red-500 transition">
              <i className="fab fa-youtube"></i>
            </NavLink>
          </div>
        </div>
      </div>

      {/* this is bottom line */}
      <div className="text-center text-sm text-gray-500 border-t border-gray-700 pt-2">
        © 2025 SportZone from <span className="rounded-lg font-semibold text-rose-400 px-2 py-1 bg-gray-900">💖 Virat Elite Series 💖</span> . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
