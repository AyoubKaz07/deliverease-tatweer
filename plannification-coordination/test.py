import requests

# Define the API URL
url = "http://127.0.0.1:5000/predict"

# Example input data (Ensure all features are included)
data = {
    "item_cluster_1": 0,
    "item_cluster_2": 1,
    "item_cluster_3": 0,
    "item_cluster_4": 0,
    "item_cluster_5": 0,
    "sales_roll_mean_30": 15.3,
    "store_cluster_1": 1,
    "store_cluster_2": 0,
    "store_cluster_3": 0,
    "store_cluster_4": 0,
    "item": 42,
    "store": 7,
    "season": 2,
    "day_of_week": 3,
    "sales_ewm_alpha_05_lag_105": 14.5,
    "sales_ewm_alpha_05_lag_91": 13.2,
    "sales_ewm_alpha_05_lag_98": 12.8,
    "sales_ewm_alpha_05_lag_112": 15.0,
    "sales_ewm_alpha_05_lag_180": 11.6,
    "sales_ewm_alpha_05_lag_270": 9.7,
    "week_of_year": 22,
    "sales_ewm_alpha_05_lag_365": 7.3,
    "month": 6,
    "sales_ewm_alpha_05_lag_546": 5.1,
    "sales_ewm_alpha_05_lag_728": 3.9,
    "day_of_year": 150
}




from utils.utils import calculate_features

item = 9
store = 8 
calculated_features = calculate_features(item, store)

print(calculated_features)


# Send POST request
response = requests.post(url, json=calculated_features)

# Print response
print(response.json())
