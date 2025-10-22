import React from "react";

const RidePopup = (props) => {
  return (
    <div>
      <div>
        <h5
          className="p-3 text-center w-[93%] absolute top-0"
          onClick={() => {
            props.setRidePopupPanel(false)
          }}
        >
          <i className="text-2xl text-gray-200 ri-arrow-down-wide-fill"></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-5">New Ride Available!</h3>

        <div className="flex items-center mt-4 bg-yellow-500 p-4 rounded-lg justify-between">
          <div className="flex items-center gap-3 ">
            <img className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000" alt="" />

            <h2 className="text-lg font-medium">Harsh Patel</h2>
          </div>
            <h5 className="text-lg font-semibold">2.2 KM</h5>
        </div>

        <div className="flex justify-between gap-2 flex-col items-center">
          <div className="w-full mt-5">
            <div className="flex items-center gap-4 p-3 border-b-2 border-b-gray-200">
              <i className="text-lg ri-map-pin-user-line"></i>
              <div>
                <h3 className="text-lg font-medium">561/11-A</h3>
                <p className="text-sm -mt-1 text-gray-500">Source</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 border-b-2 border-b-gray-200">
              <i className="text-lg ri-map-pin-line"></i>
              <div>
                <h3 className="text-lg font-medium">561/11-A</h3>
                <p className="text-sm -mt-1 text-gray-500">Destination</p>
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

          <button
            onClick={() => {
                props.setConfirmRidePopupPanel(true)
            }}
            className="w-full mt-5 bg-green-500 text-white font-semibold p-2 rounded-lg"
          >
            Confirm
          </button>

          <button
            onClick={() => {
                props.setRidePopupPanel(false)
            }}
            className="w-full mt-1 bg-gray-300 text-gray-700 font-semibold p-2 rounded-lg"
          >
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopup;
