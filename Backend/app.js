const dotenv = require("dotenv")
const cors = require("cors");
const express = require('express');
const app = express();
const connectToDB = require("./db/db");
const cookieparser = require("cookie-parser");

const userRoutes = require("./routes/user_routes");
const driverRoutes = require("./routes/driver_routes");
const mapsRoutes = require("./routes/maps_routes");
const ridesRoutes = require("./routes/ride_routes");

connectToDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieparser())

app.use("/users", userRoutes);
app.use("/drivers", driverRoutes);
app.use("/maps", mapsRoutes);
app.use("/rides", ridesRoutes);

module.exports = app;