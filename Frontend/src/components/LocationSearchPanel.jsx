import React from "react";

const LocationSearchPanel = (props) => {
  return (
    <div>
      {props.suggestions.map((elem, idx) => (
        <div
          key={idx}
          onClick={() => {
            if (props.activeField === "pickup") {
              props.setPickup(elem);
            } else if (props.activeField === "destination") {
              props.setDestination(elem);
            }
            props.setVehiclePanel(true);
            props.setPanelOpen(false);
          }}
          className="flex gap-4 border-2 p-3 border-white active:border-black rounded-xl items-center my-2 justify-start"
        >
          <h2 className="bg-[#eee] flex items-center justify-center h-10 w-10 rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{elem}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;