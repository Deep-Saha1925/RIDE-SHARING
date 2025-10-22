import React from "react";

const LookingForDriver = (props) => {
  return (
    <div>
      <h5
        className="p-3 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setVehicleFound(false);
        }}
      >
        <i className="text-2xl text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Looing for a Driver</h3>

      <div className="flex justify-between gap-2 flex-col items-center">
        <img
          className="h-20 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutqrpU7mZAsnEklifsm4OMwu5qL02rlV0bw&s"
          alt=""
        />
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

export default LookingForDriver;
