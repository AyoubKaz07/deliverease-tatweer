import pandas as pd
import numpy as np
import random

# Simulated database (replace with actual DB queries in real usage)
db_data = {'sales': {'item_1': [269, 146, 249, 162, 104, 227, 235, 259, 102, 107], 'item_2': [203, 147, 278, 175, 261, 298, 109, 216, 276, 258], 'item_3': [226, 100, 242, 210, 115, 135, 300, 119, 298, 103], 'item_4': [146, 198, 216, 116, 224, 166, 162, 289, 138, 159], 'item_5': [138, 102, 188, 194, 267, 296, 144, 281, 145, 171], 'item_6': [191, 293, 250, 281, 121, 293, 276, 285, 133, 278], 'item_7': [108, 260, 256, 168, 151, 137, 212, 272, 236, 158], 'item_8': [168, 228, 292, 163, 267, 185, 284, 228, 118, 232], 'item_9': [183, 211, 231, 202, 287, 219, 192, 185, 264, 179], 'item_10': [204, 212, 225, 105, 141, 110, 139, 105, 162, 260], 'item_11': [116, 158, 152, 252, 210, 235, 214, 223, 255, 297], 'item_12': [137, 263, 261, 245, 201, 251, 122, 240, 147, 228], 'item_13': [203, 148, 150, 189, 206, 191, 126, 105, 138, 284], 'item_14': [258, 138, 115, 223, 110, 185, 193, 129, 275, 148], 'item_15': [143, 205, 144, 171, 232, 142, 296, 249, 144, 279], 'item_16': [295, 242, 121, 177, 103, 295, 224, 204, 152, 124], 'item_17': [280, 136, 134, 108, 286, 163, 161, 150, 122, 253], 'item_18': [295, 175, 232, 114, 189, 178, 208, 170, 270, 130], 'item_19': [126, 116, 166, 228, 243, 175, 130, 138, 263, 223], 'item_20': [175, 136, 284, 201, 211, 274, 102, 193, 125, 137]}, 'season': {'item_1': 'Winter', 'item_2': 'Spring', 'item_3': 'Summer', 'item_4': 'Spring', 'item_5': 'Spring', 'item_6': 'Winter', 'item_7': 'Winter', 'item_8': 'Summer', 'item_9': 'Winter', 'item_10': 'Winter', 'item_11': 'Winter', 'item_12': 'Summer', 'item_13': 'Summer', 'item_14': 'Spring', 'item_15': 'Summer', 'item_16': 'Winter', 'item_17': 'Winter', 'item_18': 'Fall', 'item_19': 'Fall', 'item_20': 'Fall'}, 'day_of_week': {'item_1': 4, 'item_2': 6, 'item_3': 4, 'item_4': 6, 'item_5': 5, 'item_6': 2, 'item_7': 3, 'item_8': 1, 'item_9': 6, 'item_10': 0, 'item_11': 3, 'item_12': 2, 'item_13': 5, 'item_14': 4, 'item_15': 4, 'item_16': 0, 'item_17': 1, 'item_18': 6, 'item_19': 3, 'item_20': 0}, 'store_clusters': {'store_1': 1, 'store_2': 2, 'store_3': 3, 'store_4': 4, 'store_5': 5, 'store_6': 6, 'store_7': 7, 'store_8': 8, 'store_9': 9, 'store_10': 10}, 'item_clusters': {'item_1': 1, 'item_2': 2, 'item_3': 3, 'item_4': 4, 'item_5': 5, 'item_6': 6, 'item_7': 7, 'item_8': 8, 'item_9': 9, 'item_10': 10, 'item_11': 11, 'item_12': 12, 'item_13': 13, 'item_14': 14, 'item_15': 15, 'item_16': 16, 'item_17': 17, 'item_18': 18, 'item_19': 19, 'item_20': 20}, 'month': {'item_1': 3, 'item_2': 9, 'item_3': 8, 'item_4': 5, 'item_5': 2, 'item_6': 2, 'item_7': 1, 'item_8': 6, 'item_9': 11, 'item_10': 4, 'item_11': 3, 'item_12': 11, 'item_13': 7, 'item_14': 9, 'item_15': 3, 'item_16': 12, 'item_17': 9, 'item_18': 1, 'item_19': 8, 'item_20': 6}}


# Calculate features based on the fetched data
def calculate_features(item_id, store_id):
    # Convert item_id and store_id to the correct keys
    item_key = f'item_{item_id}'
    store_key = f'store_{store_id}'

    if item_key not in db_data['sales'] or store_key not in db_data['store_clusters']:
        raise ValueError("Invalid item or store ID")

    # Fetch the store and item clusters based on the user input
    store_cluster = db_data['store_clusters'].get(store_key, None)
    item_cluster = db_data['item_clusters'].get(item_key, None)

    if store_cluster is None or item_cluster is None:
        raise ValueError("Store or Item cluster not found")

    # Create the feature dictionary
    features = {}
    
    for i in range(1, 6):
        features[f'item_cluster_{i}'] = 1 if i == item_cluster else 0
    for i in range(1, 5):
        features[f'store_cluster_{i}'] = 1 if i == store_cluster else 0

    # Get other relevant information from the database
    season = db_data['season'].get(item_key, '')
    day_of_week = db_data['day_of_week'].get(item_key, 0)
    month = db_data['month'].get(item_key, 1)

    # Simulate calculations for the features
    # Example of calculating rolling mean over the last 30 periods (can adjust length)
    sales_data = db_data['sales'].get(item_key, [])
    sales_series = pd.Series(sales_data)
    features['sales_roll_mean_30'] = sales_series.rolling(window=30).mean().iloc[-1] if len(sales_data) >= 30 else 0

    # Example of calculating Exponentially Weighted Mean (EWM) with alpha=0.05, different lags
    alpha = 0.05
    for lag in [105, 91, 98, 112, 180, 270, 365, 546, 728]:
        features[f'sales_ewm_alpha_05_lag_{lag}'] = sales_series.ewm(alpha=alpha).mean().shift(lag).iloc[-1] if len(sales_data) >= lag else 0

    # Additional static features
    features['item'] = item_id
    features['store'] = store_id
    features['season'] = 1 if season == 'Winter' else 2  # Example of encoding categorical feature
    features['day_of_week'] = day_of_week
    features['week_of_year'] = pd.to_datetime('today').week  # Current week of the year
    features['month'] = month
    features['day_of_year'] = pd.to_datetime('today').dayofyear  # Current day of the year

    return features

# # Example usage:
# item_id = 1  # User input for item
# store_id = 1  # User input for store

# features = calculate_features(item_id, store_id)
# print(features)
