const driverModel = require("../models/driver_model");
const driverService = require("../services/driver_service");
const { validationResult } = require("express-validator");

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(404).json({erros: errors.array()});
    }

    const {fullname, email, password, vehicle} = req.body;
    const isDriverAlreadyRegistered = await driverModel.findOne({email});
    if(isDriverAlreadyRegistered){
        return res.status(400).json({message: "Driver already exists.."});
    }

    const hashPassword = await driverModel.hashPassword(password);

    const driver = await driverService.createDriver({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashPassword,
        color: vehicle.color,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType,
        plate: vehicle.plate,
    });

    const token = driver.generateAuthToken();
    res.status(200).json({token, driver}); 
}