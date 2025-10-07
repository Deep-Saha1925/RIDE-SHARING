const express = require("express");
const router = express.Router();
const {body} = require("express-validator");
const driverController = require("../controllers/driverController");
const authMiddleWare = require("../middlewares/auth_middleware");

router.post('/register', [
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({ min: 3 }).withMessage("Firstname must be atleast 3 characters."),
    body('password').isLength({min: 6}).withMessage("Password must be of length 6."),
    body('vehicle.color').isLength({ min: 3 }).withMessage("Color must be atleast 3 characters."),
    body('vehicle.plate').isLength({ min: 3 }).withMessage("Plate must be atleast 3 characters."),
    body('vehicle.capacity').isLength({ min: 1 }).withMessage("Capacity must be atleast 1 person."),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage("Invalid vehicle type."),
],
    driverController.registerCaptain
)

router.post("/login", [
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min: 6}).withMessage("Password must be of length 6.")
],
    driverController.loginDriver
)

router.get("/profile", authMiddleWare.authDriver, driverController.getDriverProfile);
router.get("/logout", authMiddleWare.authDriver, driverController.logoutDriver);


module.exports = router;