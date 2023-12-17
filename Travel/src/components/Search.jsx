import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p className="py-4">
            Come experience what our beautiful country nepal has to offer. Our
            customer service are impeccable and satisfactory. Our prices are
            also one of the best that you will be able to find in the market. If
            you're looking for a place to sightsee then make and join us in this
            wonderful experience that you will never forget in your lifetime.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button className="bg-blue-300">
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button className="bg-blue-300">
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="border text-center">
            <p className="pt-2">GET AN ADDITIONAL 10% OFF</p>
            <p className="py-4">12 HOURS LEFT</p>
            <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SAVE</p>
        </div>
        <form className="w-full bg-white">
            <div className="flex flex-col my-2 ">
                <label >Destination</label>
                <select className="border rounded-md bg-white p-2">
                    <option>Pokhara</option>
                    <option>Mt Everest</option>
                    <option>Gosaikundo</option>
                    <option>Chitwan</option>
                    <option>Mustang</option>
                </select>
            </div>
            <div className="flex flex-col my-4">
                <label>Check-In</label>
                <input className="border rounded-md p-2 bg-white" type="date"/>
            </div>
            <div className="flex flex-col my-2 ">
                <label >Check-Out</label>
                <input className="border rounded-md p-2 bg-white " type="date"/>
            </div>
            <button className="bg-blue-300 w-full my-4">Rates & Availability</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
