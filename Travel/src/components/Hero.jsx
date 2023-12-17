import React from "react";
import nep from "../assets/n1.jpg";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <img className="w-full h-full object-cover" src={nep} />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/20">
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
          <h1>First Class Travel</h1>
          <h2 className="py-3">Best Locations In Nepal</h2>
          <form className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-700/90">
            <div>
              <input
                className="bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none"
                type="text"
                placeholder="Search Destination"
              />
            </div>
            <div>
              <button className="bg-blue-400">
                <AiOutlineSearch size={20} className="text-white" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
