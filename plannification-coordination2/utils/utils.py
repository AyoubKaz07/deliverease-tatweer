import pandas as pd
import numpy as np

# Simulated database (replace with actual DB queries in real usage)
db_data = {
    'sales': {
        'item_1': [100, 110, 115, 120, 130, 125, 140, 135, 145, 150],
        'item_2': [200, 210, 220, 230, 240, 250, 260, 270, 280, 290],
    },
    'season': {
        'item_1': 'Winter',
        'item_2': 'Summer',
    },
    'day_of_week': {
        'item_1': 2,  # Monday
        'item_2': 5,  # Friday
    },
    'store': {
        'store_1': [1, 1, 2, 1, 3, 2, 1, 1, 2, 1],
        'store_2': [3, 3, 3, 3, 2, 1, 2, 2, 1, 1],
    },
    'month': {
        'item_1': 1,  # January
        'item_2': 3,  # March
    }
}

# Calculate features based on the fetched data
def calculate_features(item, store):
    features = {}
    
    for i in range(1, 5):
        if i == item:
            features['store_cluster_' + str(i)] = 1
        else:
            features['store_cluster_' + str(i)] = 0
    
    for i in range(1, 6):
        if i == item:
            features['item_cluster_' + str(i)] = 1
        else:
            features['item_cluster_' + str(i)] = 0
    
    item = f'item_{item}'
    store = f'store_{store}'
    sales_data = db_data['sales'].get(item, [])
    season = db_data['season'].get(item, '')
    day_of_week = db_data['day_of_week'].get(item, 0)
    month = db_data['month'].get(item, 1)

    # Simulate calculations for the features

    # Example of calculating rolling mean over the last 30 periods (can adjust length)
    sales_series = pd.Series(sales_data)
    features['sales_roll_mean_30'] = sales_series.rolling(window=30).mean().iloc[-1] if len(sales_data) >= 30 else 0

    # Example of calculating Exponentially Weighted Mean (EWM) with alpha=0.05, different lags
    alpha = 0.05
    for lag in [105, 91, 98, 112, 180, 270, 365, 546, 728]:
        features[f'sales_ewm_alpha_05_lag_{lag}'] = sales_series.ewm(alpha=alpha).mean().shift(lag).iloc[-1] if len(sales_data) >= lag else 0

    # Additional static features
    features['item'] = int(item.split('_')[-1])
    features['store'] = int(store.split('_')[-1])
    features['season'] = 1 if season=='Winter' else 2  # Example of encoding categorical feature
    features['day_of_week'] = day_of_week
    features['week_of_year'] = pd.to_datetime('today').week  # Current week of the year
    features['month'] = month
    features['day_of_year'] = pd.to_datetime('today').dayofyear  # Current day of the year

    return features

