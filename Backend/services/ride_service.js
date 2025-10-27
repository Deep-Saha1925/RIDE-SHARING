const rideModel = require('../models/ride_model');
const mapService = require('../services/maps_service');

async function getFare(pickup, destination){
    if(!pickup || !destination){
        throw new Error("Invalid locations");
    }

    const distanceTime = await mapService.getDistanceTime(pickup, destination);

    const baseFare = {
        auto: 30,
        car: 50,
        moto: 20,
    };

    const perKmRate = {
        auto: 10,
        car: 15,
        moto: 8,
    };

    const perMinuteRate = {
        auto: 2,
        car: 3,
        moto: 1,
    };
    
    const fare = {
        auto: baseFare.auto + (perKmRate.auto * (distanceTime.distance / 1000)) + (perMinuteRate.auto * (distanceTime.time / 60)),
        car: baseFare.car + (perKmRate.car * (distanceTime.distance / 1000)) + (perMinuteRate.car * (distanceTime.time / 60)),
        moto: baseFare.moto + (perKmRate.moto * (distanceTime.distance / 1000)) + (perMinuteRate.moto * (distanceTime.time / 60)),
    };

    return fare;
}

function generateOTP(num) {
    const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
    return otp;
}

module.exports.createRide = async ({
    user, pickupLocation, dropoffLocation, vehicleType
}) => {
    if(!user || !pickupLocation || !dropoffLocation || !vehicleType){
        throw new Error("All fields are required to create a ride.");
    }

    const fare = await getFare(pickupLocation, dropoffLocation);
    const ride = new rideModel({
        user: user,
        pickUpLocation: pickupLocation,
        dropOffLocation: dropoffLocation,
        OTP: generateOTP(6),
        fare: fare[vehicleType]
    });

    return ride;
}


module.exports.confirmRide = async ({
    rideId, driver
}) => {
    if (!rideId) {
        throw new Error('Ride id is required');
    }

    await rideModel.findOneAndUpdate({
        _id: rideId
    }, {
        status: 'accepted',
        driver: driver._id
    })

    const ride = await rideModel.findOne({
        _id: rideId
    }).populate('user').populate('driver').select('+otp');

    if (!ride) {
        throw new Error('Ride not found');
    }

    return ride;

}

module.exports.startRide = async ({ rideId, otp, driver }) => {
    if (!rideId || !otp) {
        throw new Error('Ride id and OTP are required');
    }

    const ride = await rideModel.findOne({
        _id: rideId
    }).populate('user').populate('driver').select('+otp');

    if (!ride) {
        throw new Error('Ride not found');
    }

    if (ride.status !== 'accepted') {
        throw new Error('Ride not accepted');
    }

    if (ride.otp !== otp) {
        throw new Error('Invalid OTP');
    }

    await rideModel.findOneAndUpdate({
        _id: rideId
    }, {
        status: 'ongoing'
    })

    return ride;
}

module.exports.endRide = async ({ rideId, driver }) => {
    if (!rideId) {
        throw new Error('Ride id is required');
    }

    const ride = await rideModel.findOne({
        _id: rideId,
        driver: driver._id
    }).populate('user').populate('driver').select('+otp');

    if (!ride) {
        throw new Error('Ride not found');
    }

    if (ride.status !== 'ongoing') {
        throw new Error('Ride not ongoing');
    }

    await rideModel.findOneAndUpdate({
        _id: rideId
    }, {
        status: 'completed'
    })

    return ride;
}

