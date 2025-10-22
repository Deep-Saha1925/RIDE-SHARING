import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        className="p-3 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setWaitForDriver(false);
        }}
      >
        <i className="text-2xl text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>

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
            <i className="text-lg ri-map-pin-user-line"></i>
            <div>
              <h3 className="text-lg font-medium">561/11-A</h3>
              <p className="text-sm -mt-1 text-gray-500">
                gsjkfjksgdfskdfhskdfhk
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-3 border-b-2 border-b-gray-200">
            <i className="text-lg ri-map-pin-line"></i>
            <div>
              <h3 className="text-lg font-medium">561/11-A</h3>
              <p className="text-sm -mt-1 text-gray-500">
                gsjkfjksgdfskdfhskdfhk
              </p>
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
    </div>
  );
};

export default WaitingForDriver;
