const { default: axios } = require("axios");

async function fetchWeather(lat, lon) {
    const WEATHER_API_KEY = "39abc1e0515349cba8491241250702"; // Replace with your WeatherAPI key
    const WEATHER_API_URL = "https://api.weatherapi.com/v1/current.json";

    try {
        const response = await axios.get(WEATHER_API_URL, {
            params: {
                key: WEATHER_API_KEY,
                q: `${lat},${lon}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
    }
}

function processWeatherData(data) {
    if (!data || !data.current) return null;

    return {
        temperature: {
            temp_c: data.current.temp_c,
            feelslike_c: data.current.feelslike_c,
            heatindex_c: data.current.heatindex_c,
            windchill_c: data.current.windchill_c,
        },
        wind: {
            wind_kph: data.current.wind_kph,
            gust_kph: data.current.gust_kph,
            wind_degree: data.current.wind_degree,
            wind_dir: data.current.wind_dir,
        },
        visibility: {
            vis_km: data.current.vis_km,
            cloud: data.current.cloud,
            humidity: data.current.humidity,
        },
        precipitation: {
            precip_mm: data.current.precip_mm,
            pressure_mb: data.current.pressure_mb,
        },
        uv: {
            uv_index: data.current.uv,
            is_day: data.current.is_day,
        },
        condition: {
            text: data.current.condition.text,
            icon: data.current.condition.icon,
            last_updated: data.current.last_updated,
        },
    };
}

function isWeatherDangerous(weather) {
    if (!weather) return null;

    return {
        temperature: weather.temperature.temp_c < -10 || weather.temperature.temp_c > 40, // Extreme cold or heat
        wind: weather.wind.wind_kph > 50 || weather.wind.gust_kph > 70, // Strong winds
        visibility: weather.visibility.vis_km < 1 || weather.visibility.cloud > 90, // Low visibility or heavy cloud
        precipitation: weather.precipitation.precip_mm > 20 || weather.precipitation.pressure_mb < 980, // Heavy rain or low pressure (storm indicator)
        uv: weather.uv.uv_index > 8, // High UV index
        condition: ["Thunderstorm", "Blizzard", "Heavy rain", "Snowstorm"].includes(weather.condition.text), // Dangerous weather conditions
    };
}


module.exports = {
    fetchWeather,
    processWeatherData,
    isWeatherDangerous,
}
