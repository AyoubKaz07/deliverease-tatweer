import overpy
from geopy.distance import geodesic  # To calculate distances

api = overpy.Overpass()

# Center point (latitude, longitude) for Chlef
center_lat = 36.583012  # Example center for Chlef
center_lon = 3.038626

# Define your search radius (in meters)
radius = 5000  # 5 km

# Overpass query to fetch fuel stations within a bounding box around Chlef
# Approximate bounding box for a 5 km radius around Chlef (use a geodesic tool to calculate this)
min_lat = center_lat - 0.045  # ~ 5km latitude offset
max_lat = center_lat + 0.045  # ~ 5km latitude offset
min_lon = center_lon - 0.045  # ~ 5km longitude offset
max_lon = center_lon + 0.045  # ~ 5km longitude offset

query = f"""
    [out:json];
    node["amenity"="fuel"]({min_lat},{min_lon},{max_lat},{max_lon});
    out body;
"""

# Run the query
result = api.query(query)

# Filter results based on distance from the center point
for station in result.nodes:
    station_coords = (station.lat, station.lon)
    center_coords = (center_lat, center_lon)
    
    # Calculate the distance from the center point
    distance = geodesic(center_coords, station_coords).meters  # Distance in meters
    
    # If the station is within the radius, print it
    if distance <= radius:
        print(f"Fuel Station: {station.id}, Location: {station.lat}, {station.lon}, Distance: {distance:.2f} meters")


# import overpy

# # Initialize the Overpass API client
# api = overpy.Overpass()

# # Define the Overpass query for Chlef, Algeria (coordinates of Chlef: 36.1667° N, 1.3333° E)
# overpass_query = """
#     area["name"="Chlef"]->.searchArea;
#     (
#       node["amenity"="parking"](area.searchArea);
#       node["amenity"="rest_area"](area.searchArea);
#       node["amenity"="truck_stop"](area.searchArea);
#     );
#     out body;
# """

# # Send the query to the Overpass API and get the results
# result = api.query(overpass_query)

# # Iterate through the nodes and print the relevant information
# for node in result.nodes:
#     print(f"Name: {node.tags.get('name', 'N/A')}")
#     print(f"Type: {node.tags.get('amenity')}")
#     print(f"Location: {node.lat}, {node.lon}")
#     print("-" * 40)