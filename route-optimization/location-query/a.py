import requests
import json

# GraphHopper VRP API Endpoint (modify if using a local instance)
GRAPH_HOPPER_URL = "http://localhost:8989/vrp"

# Define your request payload
payload = {
    "vehicles": [
        {
            "vehicle_id": "vehicle_1",
            "start_address": {"location_id": "start", "lon": 3.05, "lat": 36.75}
        }
    ],
    "services": [
        {
            "id": "wp1",
            "name": "Waypoint 1",
            "address": {"location_id": "wp1", "lon": 3.08, "lat": 36.77}
        },
        {
            "id": "wp2",
            "name": "Waypoint 2",
            "address": {"location_id": "wp2", "lon": 3.10, "lat": 36.80}
        }
    ]
}

# Send request to GraphHopper
response = requests.post(GRAPH_HOPPER_URL, json=payload)

# Check response
if response.status_code == 200:
    data = response.json()
    print(json.dumps(data, indent=4))  # Pretty print response
else:
    print(f"Error {response.status_code}: {response.text}")
