import React from "react";
// import image from "../assets/images/image.png";
import image from "../assets/images/mainimg.png";
import { logo } from "../assets/images";
const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4 h-[550px] flex items-center">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        <img src={logo} alt="laptop" className="w-[500px] mx-auto my-4" />
      
      <div className="flex flex-col justify-center">
        <p className="text-[#0096FF] font-bold uppercase">worldwide distribution
</p>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">The FunOlympic Games 2023</h1>
        <p>
        The FunOlympic Games 2023 will be aired globally on this platform.
          Here, you may see all of the highlights and live streamings.
          Enjoy the fun by watching the game's highlights.



        </p> 
        <span className="font-bold uppercase">LIVE - THE - MOMENT</span>
        <button className=" bg-blue-600 text-white w-[200px] rounded-md font-medium my-6 mx-auto py-3 ">Get Started</button>
      </div>
      </div>
    </div>
  );
};   

export default Analytics;
