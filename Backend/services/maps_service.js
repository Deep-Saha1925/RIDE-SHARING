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

module.exports.getDistanceTime = async (origin, destination) => {
    if(!origin || !destination) {
        throw new Error('Origin and destination are required !!');
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
            throw new Error(`Unable to fetch distance and time.`);
        }

        if(data.rows[0].elements[0].status === 'ZERO_RESULTS'){
            throw new Error("No routed found.");
        }
        
        return data.rows[0].elements[0];

    } catch (error) {
        throw new Error(`Failed to fetch coordinates: ${error.message}`);
    }
}

module.exports.getAutoCompleteSuggestions = async (input) => {
    if(!input){
        throw new Error("Query is required..");
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
            throw new Error(`Unable to fetch distance and time.`);
        }

        return data.predictions;

    } catch (error) {
        throw new Error(`Failed to fetch coordinates: ${error.message}`);
    }
}

module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {

    const captains = await captainModel.find({
        location: {
            $geoWithin: {
                $centerSphere: [ [ ltd, lng ], radius / 6371 ]  //radius in KM
            }
        }
    });

    return captains;


}