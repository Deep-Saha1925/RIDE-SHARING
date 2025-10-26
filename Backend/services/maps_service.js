const axios = require("axios");

module.exports.getAddressCoordinate = async (address) => {
    if (!address) {
        throw new Error("Address is required.");
    }

    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/geocode/json`;

    try {
        const response = await axios.get(url, {
            params: {
                address: address,
                key: apiKey
            }
        });

        const data = response.data;

        if (data.status !== "OK") {
            throw new Error(`Google Maps API error: ${data.status}`);
        }

        const location = data.results[0].geometry.location;
        return {
            lat: location.lat,
            lng: location.lng
        };
    } catch (error) {
        throw new Error(`Failed to fetch coordinates: ${error.message}`);
    }
};