import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import axios from "axios";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import ConfirmRide from "../components/ConfirmRide";
import VehiclePanel from "../components/VehiclePanel";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [activeField, setActiveField] = useState(""); // Tracks which field is active (pickup or destination)

  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const fetchSuggestions = async (query) => {
    try {
      const response = await axios.get("http://localhost:4000/maps/suggestions", {
        params: { input: query },
      });
      setSuggestions(response.data.suggestions || []);
    } catch (error) {
      console.error("Error fetching suggestions:", error.message);
    }
  };

  const handlePickupChange = (e) => {
    const value = e.target.value;
    setPickup(value);
    setActiveField("pickup");
    fetchSuggestions(value);
    setPanelOpen(true);
  };

  const handleDestinationChange = (e) => {
    const value = e.target.value;
    setDestination(value);
    setActiveField("destination");
    fetchSuggestions(value);
    setPanelOpen(true);
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 24,
          opacity: 1,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          opacity: 0,
          padding: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(function () {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePanel]);

  useGSAP(function () {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePanel]);

  useGSAP(function () {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehicleFound]);

  useGSAP(function () {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [waitingForDriver]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1200px-Uber_logo_2018.svg.png"
        alt=""
        srcSet=""
      />

      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://cdn.theatlantic.com/thumbor/BlEOtTo9L9mjMLuyCcjG3xYr4qE=/0x48:1231x740/960x540/media/img/mt/2017/04/IMG_7105/original.png"
          alt=""
        />
      </div>

      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacity-0 top-6 right-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-fill"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a Trip</h4>
          <form>
            <div className="line absolute h-16 w-1 top-[45%] left-12 bg-gray-900 rounded-full"></div>
            <input
              value={pickup}
              onChange={handlePickupChange}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pickup location"
            />
            <input
              value={destination}
              onChange={handleDestinationChange}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter location"
            />
          </form>
        </div>

        <div ref={panelRef} className=" bg-white h-0">
          <LocationSearchPanel
            suggestions={suggestions}
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
            setPickup={setPickup}
            setDestination={setDestination}
            activeField={activeField}
          />
        </div>
      </div>

      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full px-3 py-10 pt-15 bg-white"
      >
        <VehiclePanel
          setVehiclePanel={setVehiclePanel}
          setConfirmRidePanel={setConfirmRidePanel}
        />
      </div>

      <div
        ref={confirmRidePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full px-3 py-10 pt-15 bg-white"
      >
        <ConfirmRide
          setConfirmRidePanel={setConfirmRidePanel}
          setVehicleFound={setVehicleFound}
        />
      </div>

      <div
        ref={vehicleFoundRef}
        className="fixed w-full z-10 bottom-0 translate-y-full px-3 py-10 pt-15 bg-white"
      >
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>

      <div
        ref={waitingForDriverRef}
        className="fixed w-full z-10 bottom-0 px-3 py-10 pt-15 bg-white"
      >
        <WaitingForDriver waitingForDriver={waitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
