import React from "react";
import { Link } from "react-router-dom";

const DriverHome = () => {
  return (
    <div className="h-screen">
      <div className="fixed p-6 top-0 flex items-center justify-between w-full">
        <img className="w-16" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1200px-Uber_logo_2018.svg.png" alt="" />
        <Link
          to={"/user/logout"}
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className="h-3/5">
        <img
          src="https://cdn.theatlantic.com/thumbor/BlEOtTo9L9mjMLuyCcjG3xYr4qE=/0x48:1231x740/960x540/media/img/mt/2017/04/IMG_7105/original.png"
          alt=""
        />
      </div>

      <div className="h-2/5 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-3">
            <img className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000" alt="" />
            <h4 className="text-lg font-medium">Harsh Patel</h4>
          </div>

          <div>
            <h4 className="text-xl font-semibold">Rs 120</h4>
            <p className="text-sm text-gray-500">Earned</p>
          </div>
        </div>

        <div className="flex p-4 mt-6 bg-gray-300 rounded-xl justify-center items-start gap-3">
          <div className="text-center">
            <i className="text-3xl mb-2  font-thin ri-time-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-500">Hours Online</p>
          </div>

          <div className="text-center">
            <i className="text-3xl mb-2  font-thin ri-speed-up-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-500">Hours Online</p>
          </div>

          <div className="text-center">
            <i className="text-3xl mb-2  font-thin ri-booklet-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-500">Hours Online</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DriverHome;
