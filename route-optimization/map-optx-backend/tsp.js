// Helper function to calculate the distance between two points using Haversine formula
const haversineDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth radius in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
};

// Function to solve the Traveling Salesman Problem (TSP) using brute force
const solveTSP = (points) => {
    const numPoints = points.length;
    const distances = [];

    // Create a distance matrix
    for (let i = 0; i < numPoints; i++) {
        distances[i] = [];
        for (let j = 0; j < numPoints; j++) {
            if (i === j) {
                distances[i][j] = 0;
            } else {
                const [lat1, lon1] = points[i];
                const [lat2, lon2] = points[j];
                distances[i][j] = haversineDistance(lat1, lon1, lat2, lon2);
            }
        }
    }

    // Brute-force TSP solver (try all permutations of points)
    const permutations = (arr) => {
        const result = [];
        if (arr.length === 1) return [arr];
        for (let i = 0; i < arr.length; i++) {
            const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
            const perms = permutations(rest);
            for (let perm of perms) {
                result.push([arr[i], ...perm]);
            }
        }
        return result;
    };

    const routes = permutations(Array.from({ length: numPoints - 1 }, (_, i) => i + 1));
    let bestRoute = [0];
    let minDistance = Infinity;

    // Find the route with the minimum distance
    routes.forEach(route => {
        let distance = 0;
        for (let i = 0; i < route.length - 1; i++) {
            distance += distances[route[i]][route[i + 1]];
        }
        distance += distances[0][route[0]]; // Return to start point
        if (distance < minDistance) {
            minDistance = distance;
            bestRoute = [0, ...route];
        }
    });

    let out = [];
    for (let i of bestRoute) {
        out.push(points[i]);
    }
    return out;
};

// Export functions as CommonJS module
module.exports = { haversineDistance, solveTSP };
