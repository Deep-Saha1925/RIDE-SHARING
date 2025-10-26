const rideService = require('../services/ride_service');
const { validationResult } = require("express-validator");

module.exports.createRide = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    
    const { userId, pickupLocation, dropoffLocation, vehicleType } = req.body;

    try {
        const ride = await rideService.createRide({
            user: req.user._id,
            pickupLocation,
            dropoffLocation,
            vehicleType
        });
        // await ride.save();
        res.status(201).json({message: "Ride created successfully", ride: ride});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}