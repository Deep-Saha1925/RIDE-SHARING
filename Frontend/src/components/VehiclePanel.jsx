import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 className="p-3 text-center w-[93%] absolute top-0" onClick={() => {
          props.setVehiclePanel(false)
        }}><i className="text-2xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>

        {/* Car */}
        <div onClick={() => {
            props.setConfirmRidePanel(true)
        }} className="flex border-2 border-gray-200 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
          <img
            className="h-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutqrpU7mZAsnEklifsm4OMwu5qL02rlV0bw&s"
            alt=""
          />
          <div className=" w-1/2">
            <h4 className="font-medium text-base">
              UberGo
              <span>
                <i className="ri-user-3-fill"></i>4
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 min Away</h5>
            <p className="font-medium text-xs text-gray-600">
              Affordable, compact rides
            </p>
          </div>
          <h2 className="text-xl font-semibold">Rs 253.2</h2>
        </div>

        {/* Moto */}
        <div onClick={() => {
            props.setConfirmRidePanel(true)
        }} className="flex border-2 border-gray-200 mb-2 active:border-black rounded-xl w-full p-3 items-center justify-between">
          <img
            className="h-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0SgYmhbSTYNgEbSOnCH1xmIHny53WEtbVGw&s"
            alt=""
          />
          <div className=" w-1/2">
            <h4 className="font-medium text-base">
              Moto
              <span>
                <i className="ri-user-3-fill"></i>1
              </span>
            </h4>
            <h5 className="font-medium text-sm">3 min Away</h5>
            <p className="font-medium text-xs text-gray-600">
              Affordable, motor cycle ride
            </p>
          </div>
          <h2 className="text-xl font-semibold">Rs 65</h2>
        </div>

        {/* Auto */}
        <div onClick={() => {
            props.setConfirmRidePanel(true)
        }} className="flex border-2 border-gray-200 mb-2 active:border-black rounded-xl w-full p-3 items-center justify-between">
          <img
            className="h-12"
            src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n"
            alt=""
          />
          <div className=" w-1/2">
            <h4 className="font-medium text-base">
              Uber Auto
              <span>
                <i className="ri-user-3-fill"></i>3
              </span>
            </h4>
            <h5 className="font-medium text-sm">4 min Away</h5>
            <p className="font-medium text-xs text-gray-600">
              Affordable, auto ride
            </p>
          </div>
          <h2 className="text-xl font-semibold">Rs 100</h2>
        </div>
    </div>
  )
}

export default VehiclePanel