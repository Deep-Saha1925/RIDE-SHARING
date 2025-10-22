import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link to={"/home"} className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
        <i className="text-lg font-medium ri-home-9-fill"></i>
      </Link>

      <div className="h-1/2">
        <img
          src="https://cdn.theatlantic.com/thumbor/BlEOtTo9L9mjMLuyCcjG3xYr4qE=/0x48:1231x740/960x540/media/img/mt/2017/04/IMG_7105/original.png"
          alt=""
        />
      </div>

      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img
            className="h-16"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutqrpU7mZAsnEklifsm4OMwu5qL02rlV0bw&s"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Test</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">WB 70B 3456</h4>
            <p className="text-sm text-gray-500">Maruti Suzuki</p>
          </div>
        </div>

        <div className="flex justify-between gap-2 flex-col items-center">
          <div className="w-full mt-5">
            <div className="flex items-center gap-4 p-3 border-b-2 border-b-gray-200">
              <i className="text-lg ri-map-pin-line"></i>
              <div>
                <h3 className="text-lg font-medium">561/11-A</h3>
                <p className="text-sm -mt-1 text-gray-500">Dest</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3">
              <i className="ri-money-rupee-circle-fill"></i>
              <div>
                <h3 className="text-lg font-medium">193.6</h3>
                <p className="text-sm -mt-1 text-gray-500">Cash Cash</p>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full mt-5 bg-green-500 text-white font-semibold p-2 rounded-lg">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
