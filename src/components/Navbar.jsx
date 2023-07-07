import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import DropDownUserProfile from "./DropDownUserProfile";
import { logo } from "../assets/images";

const Navbar = ({ user, setUser }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navigate = useNavigate();

  const join = () => {
    navigate("/local-user-register");
  };

  return (
    <div className="flex justify-between items-center h-24 w-full px-20    shadow-lg border-b">
     
      <Link to="/">
        <img
          src={logo}
          style={{ width: "100px", height: "100px" }}
          alt="olympic logo"
        />
      </Link>
      <ul className="hidden md:flex items-center">
       
        <li className="p-4 cursor-pointer">Sports</li>
        <li className="p-4 cursor-pointer">Schedule</li>
        <li className="p-4 cursor-pointer">Contact</li>
        
        <li  className="p-4 cursor-pointer">  <Link
                to="/aboutus"
              >
                About Us
              </Link>
              </li>
        {user ? (
          <>
            <li className="flex justify-center w-44 cursor-pointer">
              <Link
                to="/"
              >
                Live Streaming
              </Link>
            </li>
            <li className="flex justify-center w-44 cursor-pointer">
            <Link
                to="/rewatchgame"
              >
                Re-watch Game
              </Link>
            </li>
            <DropDownUserProfile user={user} setUser={setUser} />
          </>
        ) : (
          <>
            <li className="p-4">
              <Link
                to="/local-user-login"
                className="text-neutral-600 font-bold text-md hover:text-[#0096FF] w-20 h-10 flex items-center justify-center"
              >
                <span> Log in</span>
              </Link>
            </li>
            <li className="p-4">
              <button
                type="button"
                className="md:block hidden text-[#0096FF] font-bold text-md hover:bg-[#0096FF] hover:text-white border   w-20 h-10 rounded-md border-[#0096FF]"
                onClick={join}
              >
                Register
              </button>
            </li>
          </>
        )}
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-50 ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#0096FF] m-4">REACT.</h1>
        <li className="p-4 border-b border-gray-600">Contact</li>
        <li className="p-4 border-b border-gray-600">Login</li>
        <li className="p-4">Register</li>
      </ul>
    </div>
  );
};

export default Navbar;
