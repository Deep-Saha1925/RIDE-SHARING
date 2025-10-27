const express = require('express');
const router = express.Router();
const {body, query} = require('express-validator');
const rideController = require('../controllers/ride_controller');
const authMiddleWare = require("../middlewares/auth_middleware");

router.post("/create",
    authMiddleWare.authUser,
    body('pickupLocation').isString().isLength({min: 5}).withMessage("Invalid pickup location"),
    body('dropoffLocation').isString().isLength({min: 5}).withMessage("Invalid dropoff location"),
    body('vehicleType').isIn(['auto', 'car', 'moto']).withMessage("Invalid vehicle type"),
    rideController.createRide
)

router.get('/get-fare',
    authMiddleWare.authUser,
    query('pickupLocation').isString().isLength({ min: 3 }).withMessage('Invalid pickup address'),
    query('dropoffLocation').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
    rideController.getFare
)

router.post('/confirm',
    authMiddleWare.authCaptain,
    body('rideId').isMongoId().withMessage('Invalid ride id'),
    rideController.confirmRide
)

router.get('/start-ride',
    authMiddleWare.authCaptain,
    query('rideId').isMongoId().withMessage('Invalid ride id'),
    query('otp').isString().isLength({ min: 6, max: 6 }).withMessage('Invalid OTP'),
    rideController.startRide
)

router.post('/end-ride',
    authMiddleWare.authCaptain,
    body('rideId').isMongoId().withMessage('Invalid ride id'),
    rideController.endRide
)

module.exports = router;