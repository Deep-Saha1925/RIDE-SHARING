const mongoose = require("mongoose");

const blacklistTokenSchema = mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400 // 24 hours
    }
});

const blacklistToken = mongoose.model("blacklistToken", blacklistTokenSchema);

module.exports = blacklistToken;