const driverModel = require("../models/driver_model");
const driverService = require("../services/driver_service");
const { validationResult } = require("express-validator");
const blacklistTokenModel = require("../models/blacklist_token_model");

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

module.exports.loginDriver = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(404).json({erros: errors.array()});
    }

    const {email, password} = req.body;

    const driver = await driverModel.findOne({email}).select("+password");

    if(!driver){
        return res.status(401).json({message: "Something went wrong."});
    }

    const isMatch = await driver.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({message: "Something went wrong."});
    }

    const token = driver.generateAuthToken();
    res.cookie('token', token);
    res.status(200).json({token, driver});
}

module.exports.getDriverProfile = async (req, res, next) => {
    res.status(200).json(req.driver);
}

module.exports.logoutDriver = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    
    await blacklistTokenModel.create({token});
    res.clearCookie('token');

    res.status(200).json({message: "Logged out."});
}