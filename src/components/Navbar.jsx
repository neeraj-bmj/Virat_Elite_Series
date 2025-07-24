import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser, logoutUser } from "../utils/auth";
import { toast } from "react-toastify";
import Magnet from "../components/Magnet";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Logout user");
    toast.success("logout successful.");
    logoutUser();
    navigate("/login");
  };
  const handleLogin = () => {
    loginUser();
    navigate("/login");
  };
  
  const User =  localStorage.getItem("user")

  useEffect(() => {
    const User = localStorage.getItem("user");
    if (User) {
      console.log("User available =====>", JSON.parse(User))
    }else{
      console.log("User Not avialable. Please create an account after Login here.")
      toast.success("User Not avialable. Please create an account after Login here.")
    }
  }, [User]);

  return (
    <div className="NavbarContainer w-full h-auto md:h-[15vh] bg-gray-800 text-white flex flex-col md:flex-row justify-between items-center sticky top-0 z-[1000] px-4 md:px-10 py-4 md:py-15">
      {/* navbar part first */}
      <div className="logoPart flex flex-col md:flex-row gap-2 md:gap-5 items-center">
        <div className="logo hidden md:flex w-15 h-15 md:w-20 md:h-20 bg-gray-400 rounded-full overflow-hidden">
          <img
            src="https://media.gettyimages.com/id/2159844999/photo/bridgetown-barbados-virat-kohli-of-india-celebrates-with-the-icc-mens-t20-cricket-world-cup.jpg?s=612x612&w=0&k=20&c=zo9u08kvFAyce7uL3m1GMrbL7rrVwY9mDV0_FZcmwUM="
            alt="logo"
            className="w-full h-full object-cover"
          />
        </div>

        <Magnet padding={50} disabled={false} magnetStrength={10}>
          <div className="heading text-center md:text-left font-medium text-3xl md:text-5xl tracking-tighter">
            Virat Elight Series
          </div>
        </Magnet>
      </div>

      {/* navbar part second */}
      <div className="NavLinkPart text-zinc-50 flex flex-wrap justify-center md:justify-end gap-3 md:gap-8 mt-1 md:mt-0 font-semibold text-lg md:text-2xl">
        <Magnet padding={50} disabled={false} magnetStrength={10}>
          <NavLink
            className={(e) => (e.isActive ? "text-rose-500 rounded-md" : "")}
            to={"/"}
          >
            Home
          </NavLink>
        </Magnet>
        <Magnet padding={50} disabled={false} magnetStrength={10}>
          <NavLink
            className={(e) => (e.isActive ? "text-rose-500 rounded-md" : "")}
            to={"/products/services-page"}
          >
            Products
          </NavLink>
        </Magnet>
        <Magnet padding={50} disabled={false} magnetStrength={10}>
          <NavLink
            className={(e) => (e.isActive ? "text-rose-500 rounded-md" : "")}
            to={"/about"}
          >
            About Us
          </NavLink>
        </Magnet>
        <Magnet padding={50} disabled={false} magnetStrength={10}>
          <NavLink
            className={(e) => (e.isActive ? "text-rose-500 rounded-md" : "")}
            to={"/contact"}
          >
            Contact Us
          </NavLink>
        </Magnet>
        <Magnet padding={50} disabled={false} magnetStrength={10}>
          { 
          // here check condition if user not available show login button otherwise logout button
         ! User
           ? (
            <button
             onClick={() => handleLogin()}
             className="px-2 py-1 font-semibold rounded-lg cursor-pointer bg-rose-500 hover:bg-rose-600 transition-all hover:scale-105 duration-300 ease-in-out">
             Login
            </button>
          ) : (
            <button
              onClick={() => handleLogout()}
              className="px-2 py-1 font-semibold rounded-lg cursor-pointer bg-rose-500 hover:bg-rose-600 transition-all hover:scale-105 duration-300 ease-in-out">
              Logout
            </button>
          )}
        </Magnet>
      </div>
    </div>
  );
};

export default Navbar;
