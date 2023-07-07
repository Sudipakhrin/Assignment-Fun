import React from "react";

const Cards = () => {
  return (
    <div className="w-full py-[5rem] px-4 bg-white">
      <span className="flex justify-center mb-10 text-3xl font-mono font-bold">Games</span>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        
        <div className="w-full shadow-xl flex flex-col p-4  my-4 rounded-lg hover:scale-105 duration-300 justify-center items-center">
          <img
            className="w-64"
            src="https://i.pinimg.com/564x/df/d1/af/dfd1af6190854c1082668da777540622.jpg"
            alt={"/"}
          />
          <p className="mt-10 font-bold text-xl">Archery</p>
        </div>
        
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 justify-center items-center">
        <img
            className="w-64"
            src="https://i.pinimg.com/564x/e4/b6/d3/e4b6d3349e1d7148d5e8c9dba828b823.jpg"
            alt={"/"}
          />
          <p className="mt-10 font-bold text-xl">Football</p>
        </div>
        
        <div className="w-full shadow-xl flex flex-col p-4  my-4 rounded-lg hover:scale-105 duration-300 justify-center items-center h-[400px]">
        <img
            className="w-64"
            src="https://d2560u4h06m0te.cloudfront.net/images/2022/1/1/121818_003_basket.JPG"
            alt={"/"}
          />
          <p className="mt-10 font-bold text-xl">basket Ball Game</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
