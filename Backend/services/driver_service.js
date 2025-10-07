const driverModel = require("../models/driver_model");
const captainModel = require("../models/driver_model");

module.exports.createDriver = async ({
    firstname, lastname, email, password,
    color, plate, capacity, vehicleType
}) => {
    if(!firstname || !email || !password || !plate || !capacity || !vehicleType){
        throw new Error("All fields are required.");
    }

    const driver = driverModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType
        }
    });

    return driver;
}