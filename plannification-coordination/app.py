from flask import Flask, request, jsonify, render_template
import numpy as np
import pandas as pd
import lightgbm as lgb
import pickle
import h5py
from utils.utils import calculate_features
app = Flask(__name__)

# Load trained model correctly (Pickle or LightGBM)
# with open("./model/lgbm_model.pkl", "rb") as f:
#     model = pickle.load(f)

with h5py.File("./model/lgbm_model.h5", "r") as f:
    model_bytes = f["model"][()]

model = pickle.loads(model_bytes)

FEATURES = ['item_cluster_1', 'sales_roll_mean_30', 'item_cluster_5', 'store_cluster_1', 'store_cluster_2', 'item_cluster_2', 'store_cluster_4', 'item_cluster_3', 'item_cluster_4', 'item', 'store', 'store_cluster_3', 'season', 'day_of_week', 'sales_ewm_alpha_05_lag_105', 'sales_ewm_alpha_05_lag_91', 'sales_ewm_alpha_05_lag_98', 'sales_ewm_alpha_05_lag_112', 'sales_ewm_alpha_05_lag_180', 'sales_ewm_alpha_05_lag_270', 'week_of_year', 'sales_ewm_alpha_05_lag_365', 'month', 'sales_ewm_alpha_05_lag_546', 'sales_ewm_alpha_05_lag_728', 'day_of_year']

# CATEGORICAL_FEATURES = ['item_cluster', 'store_cluster', 'item', 'store', 'day_of_week', 'season', 'month']

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()

        if not isinstance(data, (list, dict)):
            return jsonify({"error": "Input must be a list of dictionaries or a single dictionary"}), 400


        print(data)
        data = calculate_features(data['item'], data['store'])
        print(data)
        
        if isinstance(data, dict):
            data = [data]
            
        
        df = pd.DataFrame(data)

        missing_features = [feature for feature in FEATURES if feature not in df.columns]
        if missing_features:
            return jsonify({"error": f"Missing features: {missing_features}"}), 400

        # for col in df.columns:
        #     if col not in FEATURES:
        #         return jsonify({"error": f"Invalid feature: {col}"}), 400

        # df[CATEGORICAL_FEATURES] = df[CATEGORICAL_FEATURES].astype('category')

        predictions = model.predict(df)
        return jsonify({"predictions": predictions.tolist()})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
