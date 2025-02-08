
function RouteRequest(points, polygone) {
    let a = [];
    for (let i of polygone) {
        a.push([i[1], i[0]]);
    }

    return {
        "points": points,
        "profile": "car",
        "elevation": true,
        "instructions": true,
        "locale": "en_US",
        "points_encoded": false,
        "points_encoded_multiplier": 1000000,
        "details": [
            "road_class",
            "road_environment",
            "max_speed",
            "average_speed"
        ],
        "snap_preventions": [
            "ferry"
        ],
        "custom_model": {
            "priority": [
                {
                    "if": "road_environment==FERRY",
                    "multiply_by": "0.9"
                },
                {
                    "if": "in_excluded_triangle",
                    "multiply_by": "0"
                }
            ],
            "areas": {
                "type": "FeatureCollection",
                "features": [
                    {
                        "id": "excluded_triangle",
                        "properties": {},
                        "type": "Feature",
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [
                                a
                            ]
                        }
                    }
                ]
            }
        },
        "ch.disable": true
    };
}

async function getRoute(request) {
    const url = new URL('http://localhost:8989/route');

    try {
        const response = await fetch(url.toString(), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request)
        });

        if (!response.ok) throw new Error(`Error: ${response.status} ${response.statusText}`);
        const data = await response.json();
        let coordinates = data.paths[0].points.coordinates;
        for (let i = 0; i < coordinates.length; i++) {
            coordinates[i] = [coordinates[i][1], coordinates[i][0]];
        }

        return { data, coordinates };
    } catch (error) {
        console.error('Request failed:', error);
    }
}

function generatePercentagesOfAmount(arr, step) {
    const result = [];
    for (let i = step; i <= 100; i += step) {
        result.push(arr[Math.min(Number.parseInt(((arr.length * i) / 100).toFixed()), arr.length - 1)]);
    }
    return result;
}

function haversineDistance(point1, point2) {
    const R = 6371; // Radius of the Earth in km
    const toRadians = (angle) => (Math.PI / 180) * angle;

    const [lat1, lon1] = point1;
    const [lat2, lon2] = point2;

    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);

    const a = Math.sin(dLat / 2) ** 2 +
              Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
              Math.sin(dLon / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance in kilometers
}

const calculatePositionAfterDistance = (route, targetDistance) => {
    let totalDistance = 0;
    let previousPoint = route[0];

    for (let i = 1; i < route.length; i++) {
        const currentPoint = route[i];
        const segmentDistance = haversineDistance(previousPoint,currentPoint);

        totalDistance += segmentDistance;

        if (totalDistance >= targetDistance) {
            return [i, currentPoint];
        }

        previousPoint = currentPoint;
    }

    return [1, route[route.length - 1]];
};

const findClosestPoint = (points, route) => {
    let closestPoint = null;
    let minDistance = Infinity;

    points.forEach(point => {
        route.forEach(routePoint => {
            const distance = haversineDistance([point.lat, point.lon] ,[routePoint[0], routePoint[1]]);
            if (distance < minDistance) {
                minDistance = distance;
                closestPoint = point;
            }
        });
    });

    return closestPoint;
};

function isEqualWithEpsilon(arr1, arr2, epsilon) {
    if (epsilon < 0) {
        return false;
    }

    if (arr1.length !== 2 || arr2.length !== 2) {
        return false;
    }

    return Math.abs(arr1[0] - arr2[0]) <= epsilon && Math.abs(arr1[1] - arr2[1]) <= epsilon;
}

module.exports = {
    RouteRequest,
    getRoute,
    generatePercentagesOfAmount,
    isEqualWithEpsilon,
    calculatePositionAfterDistance,
    findClosestPoint,
    haversineDistance
}
