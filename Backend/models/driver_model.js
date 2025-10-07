const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const driverSchema = mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minLength: [3, "Firstname must be atleast 3 characters."],
        },
        lastname: {
            type: String,
            minLength: [3, "Lastname must be atleast 3 characters."],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minLength: [5, "Email must be atleast 3 characters."],
        match: [
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            "Please enter a valid email address."
        ]
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },

    vehicle: {
        color: {
            type: String,
            required: true,
            minLength: [3, "Color must be atleast 3 characters."],
        },
        plate: {
            type: String,
            required: true,
            minLength: [3, "Plate must be atleast 3 characters."],
        },
        capacity: {
            type: Number,
            required: true,
            minLength: [1, "Capacity must be atleast 1 person."],
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto']
        }
    },

    location: {
        lat: {
            type: Number,
        },
        lon: {
            type: Number,
        }
    }
});


driverSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

driverSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

driverSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}

const driverModel = mongoose.model("driver", driverSchema);

module.exports = driverModel;