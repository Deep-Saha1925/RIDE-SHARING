const mongoose = require("mongoose");
const { type } = require("os");

const rideSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    driver:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Driver"
    },
    pickUpLocation: {
        type: String,
        required: true
    },
    dropOffLocation: {
        type: String,
        required: true
    },
    fare: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        enum: ["pending", "accepted", "in_progress", "completed", "cancelled"],
        default: "pending"
    },
    duration: {
        type: Number,   //seconds
    },
    distance: {
        type: Number,   //metres
    },

    paymentID: {
        type: String,
    },
    orderID: {
        type: String,
    },
    signature: {
        type: String
    },

    OTP: {
        type: String,
        select: false,
        required: true
    }
})
module.exports = mongoose.model("ride", rideSchema);