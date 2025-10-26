const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const rideController = require('../controllers/ride_controller');
const authMiddleWare = require("../middlewares/auth_middleware");

router.post("/create",
    authMiddleWare.authUser,
    body('pickupLocation').isString().isLength({min: 5}).withMessage("Invalid pickup location"),
    body('dropoffLocation').isString().isLength({min: 5}).withMessage("Invalid dropoff location"),
    body('vehicleType').isIn(['auto', 'car', 'moto']).withMessage("Invalid vehicle type"),
    rideController.createRide
)

module.exports = router;