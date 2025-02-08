const { fetchClosestFuelStations } = require("./fuel.js");
const { calculatePositionAfterDistance, findClosestPoint, getRoute, isEqualWithEpsilon, RouteRequest, generatePercentagesOfAmount } = require("./helpers.js");
const {solveTSP} = require("./tsp")
const {fetchWeather, isWeatherDangerous, processWeatherData} = require("./weather")

let routeFound = false;
let FUEL = 10;

let optimalPATH = [];


const excludedTriangle = [
    [36.710275, 2.933803],
    [36.582864, 2.796347],
    [36.601485, 2.998489],
    [36.710275, 2.933803]
];

async function CHECK_WEATHER_IN_ROUTE(cords) {
    let weather_split = 5;
    let weather_waypoints = generatePercentagesOfAmount(cords, weather_split);
    let weather_data_on_waypoints = [];

    for (let i = 0; i < 100 / weather_split; i++) {
        let weather = await fetchWeather(weather_waypoints[2][0], weather_waypoints[2][1]);
        const dangerous = isWeatherDangerous(processWeatherData(weather));
        weather_data_on_waypoints.push([weather, dangerous]);
    }

    console.log("CHECK_WEATHER_IN_ROUTE",weather_data_on_waypoints);

    routeFound = true;

}

async function calcRefill(points, data, cords) {
    let checked_weather = false;

    if (data.paths[0].distance > FUEL * 2.5 * 1000) {
        const passed_distance = (FUEL - 2) * 2.5 * 1000;
        const [frc_idx, frc] = calculatePositionAfterDistance(cords, passed_distance);
        const stations = await fetchClosestFuelStations(frc);
        if (stations) {
            for (let i = frc_idx - 1; i > 0; i--) {
                const stations = await fetchClosestFuelStations(cords[i]);
                if (stations) { break; }
            }
        }

        if (!stations) {
            console.log("NO GAS STATIONS FOUND");
        } else {

            const closestCoords = findClosestPoint(stations, cords);
            if (closestCoords) {
                console.log("closestCoords", closestCoords);
                FUEL += 25;
            }
            checked_weather = true;
        }
    } else {
        CHECK_WEATHER_IN_ROUTE(cords);
        checked_weather = true;
    }

    if (!checked_weather && isEqualWithEpsilon(cords[cords.length - 1], [points[points.length - 1][1], points[points.length - 1][0]], 0.1)) {
        CHECK_WEATHER_IN_ROUTE(cords);
    }
}

async function CALC_OPTIMATE_ROUTE(points) {
    // let request = RouteRequest(solveTSP(points), excludedTriangle);
    // const { data, coordinates } = await getRoute(request);
    // return coordinates;

    routeFound = false;
    while (!routeFound) {
        let request = RouteRequest(solveTSP(points), excludedTriangle);
        const { data, coordinates } = await getRoute(request);
        await calcRefill(points, data, coordinates);
        optimalPATH = coordinates;
    }
    return optimalPATH;

}

module.exports = {CALC_OPTIMATE_ROUTE, optimalPATH , routeFound}