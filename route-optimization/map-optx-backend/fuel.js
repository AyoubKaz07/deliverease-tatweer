const { default: axios } = require("axios");

async function fetchClosestFuelStations(cord) {
    const min_lat = cord[0] - 0.045;
    const max_lat = cord[0] + 0.045;
    const min_lon = cord[1] - 0.045;
    const max_lon = cord[1] + 0.045;
  
    const overpassQuery = `
      [out:json];
      node["amenity"="fuel"](${min_lat}, ${min_lon}, ${max_lat}, ${max_lon});
      out body;
    `;
  
    try {
      const url = "https://overpass-api.de/api/interpreter";
  
      const response = await axios.post(url, `data=${encodeURIComponent(overpassQuery)}`, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
  
      const data = response.data;
  
      if (!data.elements || data.elements.length === 0) {
        console.log("No fuel stations found.");
        return [];
      }
  
      return data.elements.map(node => ({
        lat: node.lat,
        lon: node.lon,
      }));
  
    } catch (error) {
      console.error("Failed to query Overpass API:", error);
      return [];
    }
}


module.exports = {fetchClosestFuelStations};