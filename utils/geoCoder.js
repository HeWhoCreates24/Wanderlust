const NodeGeocoder = require('node-geocoder');

const options = {
  provider: "openstreetmap",
  httpAdapter: "https",
  formatter: null,
  headers: {
    "User-Agent": "wanderlust-app/1.0 tanmayhatkar240@gmail.com"
  }
};

const geocoder = NodeGeocoder(options);

async function geocodeAddress(address) {
  const res = await geocoder.geocode(address);
  return res[0]; // Contains latitude and longitude
}

module.exports = geocodeAddress;