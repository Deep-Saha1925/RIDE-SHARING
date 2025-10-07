const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/auth_middleware");

router.post("/register", [
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({ min: 3 }).withMessage("Firstname must be atleast 3 characters."),
    body('password').isLength({min: 6}).withMessage("Password must be of length 6.")
],
    userController.registerUser
)

router.post("/login", [
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min: 6}).withMessage("Password must be of length 6.")
],
    userController.loginUser
)

router.get("/profile", authMiddleware.authUser, userController.getUserProfile)

module.exports = router;