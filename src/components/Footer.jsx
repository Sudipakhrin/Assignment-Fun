import React from "react";

import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" py-16 px-20 grid lg:grid-cols-3 gap-8 text-gray-300 bg-slate-800 w-full ">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">FunOlympic</h1>
        <p className="py-4 text-justify">
          Copyright © 2023 Fun Olympics. All rights reserved.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>

      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">FunOlympic Games 2023</h6>
          <ul>
            <li className="py-2 text-sm">Fencing</li>
            <li className="py-2 text-sm">Basketball</li>
            <li className="py-2 text-sm">Soccer</li>
            <li className="py-2 text-sm">Volleyball</li>
            <li className="py-2 text-sm">Football (Soccer)
</li>
<li className="py-2 text-sm">Tennis</li>
<li className="py-2 text-sm">Boxing</li>
<li className="py-2 text-sm">Taekwondo</li>

          </ul>
        </div>

       

        <div>
          <h6 className="font-medium text-gray-400">Contact Us</h6>
          <p>TeamsOlympic@gmail.com</p>
          <p>+977 98412637272</p>
        </div>

        <div>
          <h6 className="font-medium text-gray-400">About Us</h6>
          <p>Know More about Fun Olympic</p>
          
        </div>

      </div>
      
    </div>
  );
};

export default Footer;
